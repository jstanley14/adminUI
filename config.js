let choices = {
    fontWeightChoices: [400, 500, 600, 700],
    fontFamilyChoices: ['Poppins', 'Lato', 'Bitter', 'Arial'],
    textTransformChoices: ['lowercase', 'uppercase', 'capitalize', 'none'],
    textDecorationChoices: ['none', 'underline'],
    letterSpacingChoicesRange: [0, 5, 1, 'px'],
    lineHeightChoicesRange: [0, 10, 1, 'em'],
    fontSizeChoicesRange: [10, 38, 1, 'px']
};


let subjects = [
    'math',
    'ela',
    'standard'
];

let gradeLevels = [
    'gk-5',
    'g6-12'
];

let elements = [
    {
        name: 'h2',
        friendlyName: 'h2 / LO Label',
        lessName: 'h2',
        subjectSpecific: false,
        gradeLevel: 'all',
        category: 'Generic',
        section: 'Headers',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textTransformChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange
        },
    }, {
        name: 'h3',
        friendlyName: '<h3> / LO Title',
        lessName: 'h3',
        subjectSpecific: true,
        gradeLevel: 'all',
        category: 'Generic',
        section: 'Headers',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textTransformChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange
        }
    }, {
        name: 'h4',
        friendlyName: '<h4>',
        lessName: 'default-h4',
        subjectSpecific: true,
        gradeLevel: 'all',
        category: 'Generic',
        section: 'Headers',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textTransformChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange
        }
    }, {
        name: 'hyperlink',
        friendlyName: 'hyperlink',
        lessName: 'a',
        subjectSpecific: false,
        gradeLevel: 'all',
        category: 'Links and Lists',
        section: 'Links',
        options: {
            fontColor: true,
            textDecoration: choices.textDecorationChoices,
            backgroundColor: true,
            borderColor: true
        }
    }, {
        name: 'p',
        friendlyName: '<p> text',
        lessName: 'p',
        subjectSpecific: false,
        gradeLevel: 'all',
        category: 'Generic',
        section: 'Paragraphs',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textTransformChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange
        }
    }
];
