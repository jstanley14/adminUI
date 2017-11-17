let fontColorChoices = ['blue', 'black'];
let fontWeightChoices = ['normal', 'lighter', 'heavier'];
let fontFamilyChoices = ['Arial', 'Helvetica'];
let textTransformChoices = ['lowercase', 'uppercase', 'capitalize', 'none'];


let config = {
    generic: {
        fontFamily: fontFamilyChoices
    },
    h2: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [16, 18, 20, 22],
        fontFamily: fontFamilyChoices,
        textTransform: textTransformChoices
    },
    h3: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [16, 18, 20, 22],
        textTransform: textTransformChoices,
        fontFamily: fontFamilyChoices
    },
    h4: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [16, 18, 20, 22],
        textTransform: textTransformChoices,
        fontFamily: fontFamilyChoices
    },
    h5: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [16, 18, 20, 22],
        textTransform: textTransformChoices
    },
    h6: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [16, 18, 20, 22],
        textTransform: textTransformChoices
    },
    p: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [16, 18, 20, 22],
        fontFamily: fontFamilyChoices
    },
    hyperlink: {
        fontColor: fontColorChoices,
        fontWeight: fontWeightChoices,
        fontSize: [10, 12, 14, 16],
        fontFamily: fontFamilyChoices,
        focus: [],
        visited: [],
        active: [],
        hover: [],
        decoration: ['none', 'underline']
    },
    verticalBar: {
        color: ['red', 'green', 'blue', 'black', 'yellow']
    }
};

// build up theme object as selections are made
let theme = {};

// let $elmChoices = $("#elmChoices"),
//     $elmOpts = $("#elmOpts"),
//     $attrOpts = $("#attrOpts");

$(document).ready(function() {



    // get grade level + subject to filter elm options

    loadChoices();


    loadListeners();
    // then

});

function loadOptionsForElm(choice) {
    let $elmOpts = $("#elmOpts");
    let opts = config[choice];
    let attrs = Object.keys(opts);
    $elmOpts.empty();
    attrs.forEach(function(attr) {
        let option = $('<option/>');
        option.text(attr);
        option.val(attr);
        $elmOpts.append(option);
    });
    $elmOpts.attr('size', attrs.length);
    loadOptionsForAttr(opts[$elmOpts.find("option:first-child").val()]);
}

function loadOptionsForAttr(opts) {
    let $attrOpts = $("#attrOpts");
    $attrOpts.empty();
    opts.forEach(function(opt) {
        let option = $('<option/>');
        option.text(opt);
        option.val(opt);
        $attrOpts.append(option);
    });
    $attrOpts.attr('size', opts.length);
}

function loadChoices() {
    // If prev. selected, want that choice to appear as default
    // todo
    let elms = Object.keys(config);
    let $elmChoices = $("#elmChoices");
    elms.forEach(function(elm) {
        let option = $('<option/>');
        option.text(elm);
        option.val(elm);
        $elmChoices.append(option);
    });
    $elmChoices.attr('size', elms.length);

    loadOptionsForElm($elmChoices.find("option:first-child").val());
}

function loadListeners() {
    let $elmChoices = $("#elmChoices");
    let $elmOpts = $("#elmOpts");
    let $attrOpts = $("#attrOpts");
    $elmChoices.change(function() {
        loadOptionsForElm($elmChoices.find("option:selected").val());
    });
    $elmOpts.change(function() {
        let choice = config[$elmChoices.find("option:selected").val()];
        loadOptionsForAttr(choice[$elmOpts.find("option:selected").val()]);
    });
    $attrOpts.change(function() {
        let choice = $elmChoices.find("option:selected").val();
        let opt = $elmOpts.find("option:selected").val();
        let attr = $attrOpts.find("option:selected").val();
        if (!theme.hasOwnProperty(choice)) {
            theme[choice] = {};
        }
        theme[choice][opt] = attr;
    })

}

function exportTheme() {
    console.log(theme);
}