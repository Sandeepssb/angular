class Person{
    constructor(name,id){
      this.name=name;
      this.id=id;
     
    }
    getDetails(work,ofc){
    this.working=work;
    this.office=ofc;
    }
     full(){
        console.log(`${this.name}`);
        return this.working; 
      }
      leak(){
         console.log(`${this.working}`);
      }
  }
  
  let person1 = new Person('sandeep',18);
  person1.getDetails('sec44','ownbus');
  //console.log(person1.name);
  person1.full();
  person1.leak();
  