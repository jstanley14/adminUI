let choices = {
    fontWeightChoices: [400, 500, 600, 700],
    fontFamilyChoices: ['Poppins', 'Lato', 'Bitter', 'Arial'],
    textTransformChoices: ['lowercase', 'uppercase', 'capitalize', 'none'],
    textDecorationChoices: ['none', 'underline'],
    letterSpacingChoicesRange: [0, 5, 1, 'px'],
    lineHeightChoicesRange: [0, 10, 1, 'em'],
    fontSizeChoicesRange: [10, 38, 1, 'px'],
    boxShadowPxChoicesRange: [0, 20, 1, 'px'],
    borderRadiusChoicesRange: [0, 20, 1, 'px']
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
    }, {
        name: 'ul',
        friendlyName: 'unordered list',
        lessName: 'ul',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Links and Lists',
        section: 'Lists',
        options: {
            backgroundColor: true
            // shape, color
        }
    }, {
        name: 'ol',
        friendlyName: 'ordered list',
        lessName: 'ol',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Links and Lists',
        section: 'Lists',
        options: {
            backgroundColor: true
            // shape, color
        }
    }, {
        name: 'player nav bar',
        friendlyName: 'player nav bar',
        lessName: '????????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Player',
        section: 'Nav / Menu',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textDecorationChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange,
            backgroundColor: true
            // upload/choose image?
        }
    }, {
        name: 'player menu',
        friendlyName: 'player menu',
        lessName: '????????',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Player',
        section: 'Nav / Menu',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textDecorationChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange,
            backgroundColor: true
        }
    }, {
        name: 'buttons - primary',
        friendlyName: 'buttons - primary',
        lessName: '???????',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Buttons',
        section: 'Buttons',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textDecorationChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange,
            backgroundColor: true,
            borderColor: true,
            boxShadowPx: choices.boxShadowPxChoicesRange,
            boxShadowColor: true,
            borderRadius: choices.borderRadiusChoicesRange
        }
    }, {
        name: 'buttons - secondary',
        friendlyName: 'buttons - secondary',
        lessName: '???????',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Buttons',
        section: 'Buttons',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontFamily: choices.fontFamilyChoices,
            fontWeight: choices.fontWeightChoices,
            textTransform: choices.textDecorationChoices,
            lineHeight: choices.lineHeightChoicesRange,
            letterSpacing: choices.letterSpacingChoicesRange,
            backgroundColor: true,
            borderColor: true,
            boxShadowPx: choices.boxShadowPxChoicesRange,
            boxShadowColor: true,
            borderRadius: choices.borderRadiusChoicesRange
        }
    }, {
        name: 'callout text - vertical',
        friendlyName: 'callout text - vertical',
        lessName: '????????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Callout Text',
        section: 'Callout Text',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // affected by overall background color choice
            accentColor: true
        }
    }, {
        name: 'callout text - horizontal',
        friendlyName: 'callout text - horizontal',
        lessName: '????????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Callout Text',
        section: 'Callout Text',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // affected by overall background color choice
            accentColor: true
        }
    }, {
        name: 'BG Default',
        friendlyName: 'BG Default',
        lessName: '???????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Backgrounds',
        section: 'Backgrounds',
        options: {
            fontColor: true,
            backgroundColor: true
        }
    }, {
        name: 'BG Gray',
        friendlyName: 'BG Gray',
        lessName: '???????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Backgrounds',
        section: 'Backgrounds',
        options: {
            fontColor: true,
            backgroundColor: true
        }
    }, {
        name: 'BG Dark',
        friendlyName: 'BG Default',
        lessName: '???????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Backgrounds',
        section: 'Backgrounds',
        options: {
            fontColor: true,
            backgroundColor: true // overwrites other fontColors...
        }
    }, {
        name: 'BG Pattern 1',
        friendlyName: 'BG Pattern 1',
        lessName: '???????',
        subjectSpecific: true, // ???
        gradeLevel: 'gk-5',
        category: 'Backgrounds',
        section: 'Backgrounds',
        options: {
            fontColor: true,
            backgroundColor: true
        }
    }, {
        name: 'BG Pattern 2',
        friendlyName: 'BG Pattern 2',
        lessName: '???????',
        subjectSpecific: true, // ???
        gradeLevel: 'gk-5',
        category: 'Backgrounds',
        section: 'Backgrounds',
        options: {
            fontColor: true,
            backgroundColor: true
        }
    }, {
        name: 'BG Pattern 3',
        friendlyName: 'BG Pattern 3',
        lessName: '???????',
        subjectSpecific: true, // ???
        gradeLevel: 'gk-5',
        category: 'Backgrounds',
        section: 'Backgrounds',
        options: {
            fontColor: true,
            backgroundColor: true
        }
    }, {
        name: 'Highlight Body',
        friendlyName: 'Highlight Body',
        lessName: '?????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Generic',
        section: 'Highlights',
        options: {
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // dark BG overwrites,
            accentColor: true // dark BG overwrites
        }
    }, {
        name: 'Highlight Text Box',
        friendlyName: 'Highlight Text Box',
        lessName: '?????',
        subjectSpecific: true,
        gradeLeveL: 'gk-5',
        category: 'Generic',
        section: 'Highlights',
        options: {
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // dark BG overwrites,
            accentColor: true, // dark BG overwrites,
            borderRadius: choices.borderRadiusChoicesRange
        }
    }, {
        name: 'Sidebar Body',
        friendlyName: 'Sidebar Body',
        lessName: '????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Sidebar',
        section: 'Sidebar',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // overwritten w/ dark
            accentColor: true // overwritten w/ dark
        }
    }, {
        name: 'Callout Text Vertical',
        friendlyName: 'Callout Text Vertical',
        lessName: '????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Callout',
        section: 'Callout',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // overwritten w/ dark
            accentColor: true // overwritten w/ dark
        }
    }, {
        name: 'Callout Text Horizontal',
        friendlyName: 'Callout Text Horizontal',
        lessName: '????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Callout',
        section: 'Callout',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true, // overwritten w/ dark
            accentColor: true // overwritten w/ dark
        }
    }, {
        name: 'Table',
        friendlyName: 'Table',
        lessName: '????',
        subjectSpecific: true,
        gradeLevel: 'gk-5',
        category: 'Table',
        section: 'Table',
        options: {
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true
        }
    }, {
        name: 'URL Link',
        friendlyName: 'URL Link',
        lessName: '????',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Links and Lists',
        section: 'Links',
        options: {
            fontColor: true,
            backgroundColor: true
        }
    }, {
        name: 'Safety',
        friendlyName: 'Safety',
        lessName: '???',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Safety and Advance Prep',
        section: 'Safety',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true
        }
    }, {
        name: 'Advance Prep',
        friendlyName: 'Advance Prep',
        lessName: '???',
        subjectSpecific: false,
        gradeLevel: 'gk-5',
        category: 'Safety and Advance Prep',
        section: 'Safety',
        options: {
            fontSize: choices.fontSizeChoicesRange,
            fontColor: true,
            fontWeight: choices.fontWeightChoices,
            backgroundColor: true
        }
    }

];
