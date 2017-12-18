
let adminUI = {
    subject: config.subjects[0],
    gradeLevel: config.gradeLevels[0],
    theme: {},

    initUI: function() {
        $('#grade_level, #subject, #elementPane').empty();
        config.gradeLevels.forEach(function(grade) {
            let option = $('<option/>');
            option.text(grade);
            option.val(grade);
            $('#grade_level').append(option);
        });
        config.subjects.forEach(function(subject) {
            let option = $('<option/>');
            option.text(subject);
            option.val(subject);
            $('#subject').append(option);
        });

        $('#grade_level').change(function() {
            adminUI.gradeLevel = $('#grade_level').find('option:selected').val();
            $('#elementPane').empty();
            adminUI.theme = {};
            adminUI.loadSelections();
        });

        $('#subject').change(function() {
            adminUI.subject = $('#subject').find('option:selected').val()
        });

        adminUI.loadSelections();
    },

    loadSelections: function() {
        let elms = Object.filter(config.elements, elm =>
            elm.gradeLevel === 'all' || elm.gradeLevel === adminUI.gradeLevel
        );

        // Group elms by category.
        let elmsByCategory = {};
        Object.keys(elms).forEach(key => {
            (elmsByCategory[elms[key].category] = elmsByCategory[elms[key].category] || []).push(elms[key]);
        });

        // Create categories.
        Object.keys(elmsByCategory).forEach(key => {
            let cat = $('<div/>');
            cat.append($('<h1/>').text(key));

            let elmsBySection = {};
            elmsByCategory[key].forEach(elm => {
                (elmsBySection[elm.section] = elmsBySection[elm.section] || []).push(elm)
            });

            console.log(elmsBySection['Section 1']);

            // Create sections.
            Object.keys(elmsBySection).forEach(key => {
                let sec = $('<div/>');
                sec.append($('<h3/>').text(key));

                elmsBySection[key].forEach(elm => {
                   let e = $('<div/>');
                   e.attr('id', elm.name);
                   let elmName = $('<h5/>').addClass('elementChoice').text(elm.friendlyName);
                   e.append(elmName);

                   // Create element attribute selections.
                   elm.options.forEach(opt => {
                       let attr = $('<div/>');
                       let optName = Object.keys(opt)[0];
                       attr.attr('id', optName);
                       attr.addClass('elementAttributeChoice');
                       attr.append($('<span/>').text(optName));
                       let select = $('<select/>');
                       opt[optName].forEach(choice => {
                           let option = $('<option/>');
                           option.text(choice);
                           option.val(choice);
                           select.append(option);
                       });
                       attr.append(select);
                       e.append(attr);
                   });
                   sec.append(e);
                });

                cat.append(sec);
            });

            $('#elementPane').append(cat);
        });
        $('.elementChoice').click(evt => {
            $(evt.target).siblings().toggle()
        } );
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
                        // option name, value
                        varsFile += `@${gradeLevel}_${subject}_${tagName}_${option.name}: ${option.value};\n`;
                    });
                });
            });
        });
        alert(varsFile);
        //$('#examplePane').text(varsFile);
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