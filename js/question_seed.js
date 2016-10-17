questions = [
    {
      1: {
        'q': 'What is the command used to change directory?',
        'a': ['cd', 'dc', 'cdir', 'dir_c', 'c_d'],
        'c': 0,
        'example': {
          't': [`[ cd ] Changing Directory`,
          `While navigating the file system in a terminal, you will use cd often`,
          `ex:`,
          `> cd ~/Desktop`,
          `This will navigate the terminal to the Desktop folder located in the ~ (home) directory`].join('</br>'),
          'link': 'http://guides.macrumors.com/cd'
        }
      },
      2: {
        'q': "What command outputs the contents of a file - 'text' in the terminal?",
        'a': ['cat text.txt', 'ls text.txt', 'list text.txt', 'show text.txt'],
        'c': 1,
        'example': {
          't': [`[ cat ] Concatenate`,
           `If you wish to view the raw text of a file you can output the content with 'cat'`,
           `ex:`,
           `> cat ~/Desktop/my_text_file.txt`,
           `This will dump the contents of the file into the terminal as shown`,
           `>`].join('</br>'),
           'link': ''
        }
      },
      3: {
        'q': 'What is the command used to move a file?',
        'a': ['move', 'me', 'mv'],
        'c': 2,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      4: {
        'q': 'What keyboard shortcut generally quits a program?',
        'a': ['cmd+q',
              'ctrl+w',
              'ctrl+q'],
        'c': 0,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      5: {
        'q': 'What command deletes all text in the Terminal screen?',
        'a': ['wipe', 'clear', 'reset'],
        'c': 1,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      6: {
        'q': "Which command prints the content of 'open_me.txt' to the Terminal?",
        'a': ['put ./open_me.txt', 'cat ./open_me.txt', 'read ./open_me.txt'],
        'c': 1,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      7: {
        'q': 'What will shut down your Computer immediately?',
        'a': ['sudo shutdown -h now', 'sudo power off -now', 'sudo shutdown -r now'],
        'c': 0,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      8: {
        'q': 'Which of these commands will keep my Mac awake indefinitely?',
        'a': ['stay awake', 'no sleep -f', 'caffeinate'],
        'c': 2,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      9: {
        'q': 'What command displays information about your wireless configuaration?',
        'a': ['ipconfig', 'iwlan', 'iptoolbelt'],
        'c': 0,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      },
      10: {
        'q': 'What is a simple command to test your wireless connection?',
        'a': ['test google.com', 'try google.com', 'ping google.com'],
        'c': 2,
        'example': {
          't': 'This will be the example text',
          'link': '#'
        }
      }

    }
  ];
