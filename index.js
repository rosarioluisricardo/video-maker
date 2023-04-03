const readline = require('readline-sync');

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term:')
    }
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'wat is', 'the history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'choose one optioon:')
        const selectedPrefixText = prefixes [selectedPrefixIndex]

        return selectedPrefixText
    }
    console.log(content)
}

start()