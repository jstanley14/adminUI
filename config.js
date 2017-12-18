let fontColorChoices = ['blue', 'black'];
let fontWeightChoices = ['normal', 'lighter', 'heavier'];
let fontFamilyChoices = ['Arial', 'Helvetica'];
let textTransformChoices = ['lowercase', 'uppercase', 'capitalize', 'none'];

let config = {
    subjects: ['math', 'ela', 'geography', 'science', 'history', 'generic'],
    gradeLevels: ['k-5', 'ms-hs'],
    elements: {
        'genericFontFamily': {
            name: 'genericFontFamily',
            friendlyName: 'Generic Font Family',
            tagName: '',
            gradeLevel: 'all',
            subject: 'all',
            category: 'Generic',
            section: 'Section 1',
            options: [
                { fontFamily: fontFamilyChoices }
            ]
        },
        'h2': {
            name: 'h2',
            friendlyName: 'h2 / LO Label',
            tagName: 'h2',
            gradeLevel: 'all',
            subject: 'all',
            category: 'Generic',
            section: 'Section 1',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { textTransform: textTransformChoices },
                { fontFamily: fontFamilyChoices }
            ]
        },
        'h3': {
            name: 'h3',
            friendlyName: 'h3 / LO Title',
            tagName: 'h3',
            gradeLevel: 'all',
            subject: 'specific',
            category: 'Generic',
            section: 'Section 1',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { textTransform: textTransformChoices },
                { fontFamily: fontFamilyChoices }
            ]
        },
        'h4': {
            name: 'h4',
            friendlyName: 'h4',
            tagName: 'h4',
            gradeLevel: 'all',
            subject: 'specific',
            category: 'Base / Global Nav / Menu',
            section: 'Headers',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { textTransform: textTransformChoices },
                { fontFamily: fontFamilyChoices }
            ]
        },
        'h5': {
            name: 'h5',
            friendlyName: 'h5',
            tagName: 'h5',
            gradeLevel: 'all',
            subject: 'specific',
            category: 'Base / Global Nav / Menu',
            section: 'Headers',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { textTransform: textTransformChoices }
            ]
        },
        'h6': {
            name: 'h6',
            friendlyName: 'h6',
            tagName: 'h6',
            gradeLevel: 'all',
            subject: 'all',
            category: 'Base / Global Nav / Menu',
            section: 'Headers',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { textTransform: textTransformChoices }
            ]
        },
        'p': {
            name: 'p',
            friendlyName: 'p',
            tagName: 'p',
            gradeLevel: 'all',
            subject: 'all',
            category: 'Base / Global Nav / Menu',
            section: 'Base Styles',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { fontFamily: fontFamilyChoices }
            ]
        },
        'hyperlink': {
            name: 'hyperlink',
            friendlyName: 'hyperlink',
            tagName: 'a',
            gradeLevel: 'all',
            subject: 'all',
            category: 'Base / Global Nav / Menu',
            section: 'Base Styles',
            options: [
                { fontColor: fontColorChoices },
                { fontWeight: fontWeightChoices },
                { fontSize: [10, 12, 14] },
                { fontFamily: fontFamilyChoices },
                { focus: ['???'] },
                { visited: ['???'] },
                { active: ['???'] },
                { hover: ['???'] },
                { decoration: ['???'] }
            ]
        },
        'unordered list': {
            name: 'unordered list',
            friendlyName: 'Unordered List',
            tagName: 'ul',
            gradeLevel: 'k-5',
            subject: 'all',
            category: 'Lists',
            section: 'Lists',
            options: [
                { listStyleType: ['circle', 'square'] }
            ]
        },
        'ordered list': {
            name: 'ordered list',
            friendlyName: 'Ordered List',
            tagName: 'ol',
            gradeLevel: 'k-5',
            subject: 'all',
            category: 'Lists',
            section: 'Lists',
            options: [
                { listStyleType: ['upper-roman', 'lower-alpha']  }
            ]
        },
        'player nav bar': {
            name: 'player nav bar',
            friendlyName: 'player nav bar',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Base / Global Nav / Menu',
            section: 'Nav Bar',
            options: [
                { unknown: ['unknown'] }
            ]
        },
        'bg default light': {
            name: 'bg default light',
            friendlyName: 'BG Default / Light',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Backgrounds',
            section: 'Backgrounds',
            options: [
                { backgroundColor: ['white', 'lightGray'] }
            ]
        },
        'bg medium 1': {
            name: 'bg medium 1',
            friendlyName: 'BG Medium 1',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Backgrounds',
            section: 'Backgrounds',
            options: [
                { backgroundColor: ['gray', 'darkGray'] }
            ]
        },
        'bg medium 2': {
            name: 'bg medium 2',
            friendlyName: 'BG Medium 2',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Backgrounds',
            section: 'Backgrounds',
            options: [
                { backgroundColor: ['red', 'green'] },
                { fontColor: fontColorChoices }
            ]
        },
        'bg alternate 1': {
            name: 'bg alternate 1',
            friendlyName: 'BG Alternate 1',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Backgrounds',
            section: 'Backgrounds',
            options: [
                { backgroundColor: ['red', 'green'] },
                { fontColor: fontColorChoices }
            ]
        },
        'bg alternate 2': {
            name: 'bg alternate 2',
            friendlyName: 'BG Alternate 2',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Backgrounds',
            section: 'Backgrounds',
            options: [
                { backgroundColor: ['red', 'green'] },
                { fontColor: fontColorChoices }
            ]
        },
        'bg dark': {
            name: 'bg dark',
            friendlyName: 'BG Dark',
            tagName: '???',
            gradeLevel: 'k-5',
            subject: 'specific',
            category: 'Backgrounds',
            section: 'Backgrounds',
            options: [
                { backgroundColor: ['black', 'purple'] },
                { fontColor: fontColorChoices },
                { hyperlinkColor: ['???'] },
                { focus: ['???'] },
                { visited: ['???'] },
                { active: ['???'] },
                { hover: ['???'] },
                { decoration: ['???'] }
            ]
        }
    }
};