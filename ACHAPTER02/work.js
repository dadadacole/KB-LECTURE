function User(first, last) {
    this.firstName = first;
    this.lastName = last;
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

const sumin = new User('fff', 'park');
const neo = new User('neo', 'andrew');

console.log(sumin.getFullName());
console.log(neo.getFullName());


함수 뒤에는 무조건 ()을 넣어줘야 한다