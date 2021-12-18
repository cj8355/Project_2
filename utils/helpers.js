module.exports = {
<<<<<<< HEAD
    format_source:(string1, string2)=> {
        var newstring1 = string1.split(' ').join('%20')
        var newstring2 = string2.split(' ').join('%20')
    var path = `/images/${newstring1}/${newstring2}`
    return path 
    }
}
=======
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
};
>>>>>>> main
