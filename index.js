const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map((title) => 
//    function titleCase (tutorials){
    // return tutorials.toLowerCase().split('').map(function(words)) {
    //   return (words.charAt(0).toUpperCase() + words.slice(1));
    // ).join('');}
    
    const titleCased = () => {
      return tutorials.map((line) =>{
        let split = line.split(' ')
        let capitalize = split.map(
          (updatedline) => updatedline.charAt(0).toUpperCase() + updatedline.slice(1)
        )
       let join = capitalize.join(' ')
       return join
      })
    }
    

