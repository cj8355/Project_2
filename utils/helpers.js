module.exports = {
    format_source:(string1, string2)=> {
        var newstring1 = string1.split(' ').join('%20')
        var newstring2 = string2.split(' ').join('%20')
    var path = `/images/${newstring1}/${newstring2}`
    return path 
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
          new Date(date).getFullYear()
        }`;
      },
      format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
    
        return word;
    }
}