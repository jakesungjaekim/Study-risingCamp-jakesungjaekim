const person1 = {
  name: "hi",
  age: 32,
  married: false,
  address: {
    country: "South Korea",
    city: "Seoul",
  },
  hobbys: ["music", "skiing"],
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};

console.log(person1.name)
console.log(person1.age)

const personAge = `${person1.age} 입니다.`
console.log(personAge)

// person['married']
// person.address.country
// person1['address']['city']
// person.interests
// person.interests[1]
// person.married
// person.greeting()

function func1(a) {
  console.log('func1', a)
}

func1();

const a = 1

const func2 = (a) => {
  console.log('func1',a)
}

func2(a)