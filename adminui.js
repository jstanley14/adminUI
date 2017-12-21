
let adminUI = {
    subject: subjects[0],
    gradeLevel: gradeLevels[0],
    theme: {},
    elementsState: {},
    elms: [],

    initUI: () => {
        $('#grade_level, #subject, #elementPane').empty();
        gradeLevels.forEach((grade) => {
            let option = $('<option/>');
            option.text(grade);
            option.val(grade);
            $('#grade_level').append(option);
        });
        subjects.forEach((subject) => {
            let option = $('<option/>');
            option.text(subject);
            option.val(subject);
            $('#subject').append(option);
        });

        $('#grade_level').change(() => {
            adminUI.gradeLevel = $('#grade_level').find('option:selected').val();
            $('#elementPane').empty();
            adminUI.theme = {};
            adminUI.loadSelections();
        });

        $('#subject').change(() => {
            adminUI.subject = $('#subject').find('option:selected').val();
            $('#elementPane').empty();
            adminUI.theme = {};
            adminUI.loadSelections();
        });

        adminUI.loadSelections();

        $('.secTitle, .elmTitle, .openArrow, .closedArrow').click((evt) => {
           $(evt.target).parent().toggleClass('closed');
        });

        $('select#categoriesSelect').change(() => {
            let cat = $('select#categoriesSelect').find('option:selected').val();
            $('.category').addClass('closed');
            $(`.category[id='${cat}']`).removeClass('closed');
        });

        let curCat = $('select#categoriesSelect').find('option:selected').val();
        $(`.category[id!='${curCat}']`).addClass('closed');
    },

    loadSelections: () => {
        adminUI.elms = elements.filter(elm =>
            elm.gradeLevel === 'all' || elm.gradeLevel === adminUI.gradeLevel);

        // Group by category and section.

        let elmsByCategoryAndSection = adminUI.elms.reduce((acc, cur) => {
            acc[cur.category] = acc[cur.category] || {};
            acc[cur.category][cur.section] = acc[cur.category][cur.section] || [];
            acc[cur.category][cur.section].push(cur);
            return acc;
        }, {});

        // Place on page using proper saved options.

        adminUI.setupPage(elmsByCategoryAndSection);
        adminUI.elms.forEach((elm) => adminUI.updateElmExample(elm));
    },

    setupPage: (elmsByCatAndSec) => {
        Object.keys(elmsByCatAndSec).forEach(category => {
            let catDiv = $('<div/>').addClass('category').attr('id', category);
            $('#categoriesSelect').append($('<option/>').text(category).val(category));

            Object.keys(elmsByCatAndSec[category]).forEach(section => {
                let secDiv = $('<div/>').addClass('section').attr('id', section);
                let secTitle = $('<h4/>').addClass('secTitle').text(section);
                let openArrow = $('<span/>').text('▼').addClass('openArrow');
                let closedArrow = $('<span/>').text('▶').addClass('closedArrow');
                secDiv.append(openArrow).append(closedArrow).append(secTitle);

                elmsByCatAndSec[category][section].forEach(elm => {
                    adminUI.loadElm(elm);
                    secDiv.append(adminUI.createElmDiv(elm));
                });
                catDiv.append(secDiv);
            });
            $('#elementPane').append(catDiv);
        });
    },

    createElmDiv: (elm) => {
        let elmDiv = $('<div/>').addClass('element').attr('id', elm.name);
        let elmTitle = $('<span/>').addClass('elmTitle').text(elm.friendlyName);
        let openArrow = $('<span/>').text('▼').addClass('openArrow');
        let closedArrow = $('<span/>').text('▶').addClass('closedArrow');
        elmDiv.append(openArrow).append(closedArrow).append(elmTitle);

        let elmExample = $('<span/>').addClass('elmExample').text('Example');
        elmDiv.append(elmExample);

        Object.keys(elm.options).forEach((opt) =>
            elmDiv.append(adminUI.createOption(elm, opt)));

        return elmDiv;
    },

    loadElm: (elm) => {
        adminUI.elementsState[elm.name] = savedOptions[elm.name][adminUI.gradeLevel]
            .find((gradeLevelOptions) => (
                gradeLevelOptions.subject === 'all' ||
                gradeLevelOptions.subject === adminUI.subject
            ));
    },

    updateElmExample: (elm) => {
        let elmExample = $(`div.element#${elm.name} .elmExample`);
        Object.keys(elm.options).forEach(opt => {
            switch (opt) {
                case 'fontColor':
                    elmExample.css('color', adminUI.elementsState[elm.name][opt]);
                    break;
                case 'borderColor':
                    elmExample.css('border', '1px solid');
                    elmExample.css('borderColor', adminUI.elementsState[elm.name][opt]);
                    break;
                default:
                    elmExample.css(opt, adminUI.elementsState[elm.name][opt]);
            }
        });
    },

    createOption: (elm, opt) => {
        let optDiv = $('<div/>').addClass('option');
        let optTitle = $('<span/>').addClass('optTitle').text(opt);
        optDiv.append(optTitle);

        switch (opt) {
            case 'fontFamily':
            case 'fontWeight':
            case 'textTransform':
            case 'textDecoration': {
                let optChoices = $('<select/>').addClass('optChoices');
                choices[`${opt}Choices`].forEach((ch) => {
                    optChoices.append($('<option/>').text(ch).val(ch))
                });
                optChoices.val(adminUI.elementsState[elm.name][opt]);
                optDiv.append(optChoices);
                optChoices.change(() => {
                    adminUI.elementsState[elm.name][opt] = optChoices.val();
                    adminUI.updateElmExample(elm);
                });
                break;
            }
            case 'fontSize':
            case 'lineHeight':
            case 'letterSpacing': {
                let optChoices = $('<select/>').addClass('optChoices');
                Array.fromRange(choices[`${opt}ChoicesRange`]).forEach((ch) => {
                    optChoices.append($('<option/>').text(ch).val(ch))
                });
                optChoices.val(adminUI.elementsState[elm.name][opt]);
                optDiv.append(optChoices);
                optChoices.change(() => {
                    adminUI.elementsState[elm.name][opt] = optChoices.val();
                    adminUI.updateElmExample(elm);
                });
                break;
            }
            case 'backgroundColor':
            case 'borderColor':
            case 'fontColor': {
                let optSpan = $('<span/>').addClass('colorChoice');
                let optInput = $('<input>');
                optInput.val(adminUI.elementsState[elm.name][opt]);
                let colorExample = $('<span/>').addClass('colorExample');
                colorExample.css('backgroundColor', optInput.val());
                optSpan.append(optInput).append(colorExample);
                optDiv.append(optSpan);

                // Prevent invalid color codes from being input.
                let prev = optInput.val();
                let re = /^#[0-9a-f]{3,6}$/i;
                optInput.focus(() => prev = optInput.val())
                    .change(() => {
                        if (!re.exec(optInput.val())) {
                            $(optInput).val(prev);
                        } else {
                            prev = optInput.val();
                            colorExample.css('backgroundColor', optInput.val());
                            adminUI.elementsState[elm.name][opt] = optInput.val();
                            adminUI.updateElmExample(elm);
                        }
                    });
                break;
            }
            default: {
                console.log('unrecognized option', opt);
            }
        }

        return $('<p/>').append(optDiv);
    },


    generateVariablesFile: () => {
        // For anything on the page, use current selection
        // Otherwise, use 1st choice in array in config
        // (Temporary logic - need to save choices and distinguish
        //   choices by subject (when applicable.))

        Object.keys(config.elements).forEach(key => {
            let elm = config.elements[key];
            // Need to find this way because ID can have spaces in it.
            let $onPageElm = $(`div[id='${elm.name}']`);
            adminUI.theme[key] = {};
            adminUI.theme[key].options = [];
            if ($onPageElm.length) {
                let choices = $onPageElm.children('.elementAttributeChoice');
                Array.from(choices).forEach(choice => {
                    let name = $(choice).attr('id');
                    let value = $(choice).find('option:selected').val();
                    let subjectSpecific = elm.subject !== 'all';
                    adminUI.theme[key].options.push({ name: name, value: value, subjectSpecific: subjectSpecific });
                });
            } else {
                config.elements[key].options.forEach(opt => {
                    let name = Object.keys(opt)[0];
                    let value = opt[name][0];
                    let subjectSpecific = elm.subject !== 'all';
                    adminUI.theme[key].options.push({ name: name, value: value, subjectSpecific: subjectSpecific });
                });
            }
        });

        // Have theme object - export to .less variables file.
        let varsFile = "";
        varsFile += "@subjects: ";
        config.subjects.forEach(subject =>
            varsFile += `${subject}, `
        );
        varsFile = varsFile.slice(0, -2) + ";\n\n";

        Object.keys(adminUI.theme).forEach(key => {
            let tagName = config.elements[key].tagName;
            adminUI.theme[key].options.forEach(option => {
                config.gradeLevels.forEach(gradeLevel => {
                    config.subjects.forEach(subject => {
                        varsFile += `@${gradeLevel}_${subject}_${tagName}_${option.name}: ${option.value};\n`;
                    });
                });
            });
        });
        alert(varsFile);
        console.log(varsFile);
    }
};

$(document).ready(function() {

    adminUI.initUI();


});


// From StackOverflow.
Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {});

// Input [1, 6, 2, 'px'] gives ['1px', '3px', '5px']
// Input [1, 6, 2] gives [1, 3, 5]
Array.fromRange = ([from, to, step, type = '']) => {
    let arr = [];
    for (let i = from; i <= to; i += step) {
        if (type === '') {
            arr.push(i)
        } else {
            arr.push(`${i}${type}`)
        }
    }
    return arr;
};
