let fontColorChoices = ['blue', 'black'];
let fontWeightChoices = ['normal', 'lighter', 'heavier'];
let fontFamilyChoices = ['Arial', 'Helvetica'];
let textTransformChoices = ['lowercase', 'uppercase', 'capitalize', 'none'];

let config = {
  elements: {
      'genericFontFamily': {
          name: 'Generic Font Family',
          tagName: '',
          gradeLevel: 'all',
          subject: ['all'],
          category: 'Generic',
          section: 'Section 1',
          options: [
              { fontFamily: fontFamilyChoices }
          ]
      },
      'h2': {
          name: 'h2 / LO Label',
          tagName: 'h2',
          gradeLevel: 'all',
          subject: ['all'],
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
          name: 'h3 / LO Title',
          tagName: 'h3',
          gradeLevel: 'all',
          subject: ['unknown - specific'],
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
          tagName: 'h4',
          gradeLevel: 'all',
          subject: ['unknown - specific'],
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
          tagName: 'h5',
          gradeLevel: 'all',
          subject: ['unknown - specific'],
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
          tagName: 'h6',
          gradeLevel: 'all',
          subject: ['all'],
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
          tagName: 'p',
          gradeLevel: 'all',
          subject: ['all'],
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
          tagName: 'a',
          gradeLevel: 'all',
          subject: ['all'],
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
          name: 'Unordered List',
          tagName: 'ul',
          gradeLevel: 'k5',
          subject: ['all'],
          category: 'Lists',
          section: 'Lists',
          options: [
              { listStyleType: ['circle', 'square'] }
          ]
      },
      'ordered list': {
          name: 'Ordered List',
          tagName: 'ol',
          gradeLevel: 'k5',
          subject: ['all'],
          category: 'Lists',
          section: 'Lists',
          options: [
              { listStyleType: ['upper-roman', 'lower-alpha']  }
          ]
      },
      'player nav bar': {
          name: 'player nav bar',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Base / Global Nav / Menu',
          section: 'Nav Bar',
          options: [
              { unknown: 'unknown' }
          ]
      },
      'bg default/light': {
          name: 'BG Default / Light',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Backgrounds',
          section: 'Backgrounds',
          options: [
              { backgroundColor: ['white', 'lightGray'] }
          ]
      },
      'bg medium 1': {
          name: 'BG Medium 1',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Backgrounds',
          section: 'Backgrounds',
          options: [
              { backgroundColor: ['gray', 'darkGray'] }
          ]
      },
      'bg medium 2': {
          name: 'BG Medium 2',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Backgrounds',
          section: 'Backgrounds',
          options: [
              { backgroundColor: ['red', 'green'] },
              { fontColor: fontColorChoices }
          ]
      },
      'bg alternate 1': {
          name: 'BG Alternate 1',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Backgrounds',
          section: 'Backgrounds',
          options: [
              { backgroundColor: ['red', 'green'] },
              { fontColor: fontColorChoices }
          ]
      },
      'bg alternate 2': {
          name: 'BG Alternate 2',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Backgrounds',
          section: 'Backgrounds',
          options: [
              { backgroundColor: ['red', 'green'] },
              { fontColor: fontColorChoices }
          ]
      },
      'bg dark': {
          name: 'BG Dark',
          tagName: '???',
          gradeLevel: 'k5',
          subject: ['unknown - specific'],
          category: 'Backgrounds',
          section: 'Backgrounds',
          options: [
              { backgroundColor: ['black, purple'] },
              { fontColor: fontColorChoices },
              { hyperlinkColor: '???' },
              { focus: ['???'] },
              { visited: ['???'] },
              { active: ['???'] },
              { hover: ['???'] },
              { decoration: ['???'] }
          ]
      }
  }
};