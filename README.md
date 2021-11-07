# 3-ts-access-modifiers-shorthands

 when we want assign the value inside our constructor we use this synatx

class  User {
let name:string;
constructor(name:string){
this.name=name;
}
}

 in typescript we can shorthand this to be more cool
class  Admin {
constructor(public name:string){}
}
