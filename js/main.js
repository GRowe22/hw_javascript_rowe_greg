var iceCream = ['Cookie Two-Step', 'Cookie Dough', 'Cookies and Cream'];
iceCream.push('Vanilla Bean');

var president1 = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: 8
};

var president2 = {
    firstName: 'George',
    lastName: 'Bush',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var president3 = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: 8
};

var president4 = {
    firstName: 'George',
    lastName: 'Bush',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var president5 = {
    firstName: 'Ronald',
    lastName: 'Regan',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var president = [president1, president2, president3, president4, president5];
console.log(president[2].firstName, president[2].lastName);

function howdy(person, message) {
    return person + 'says' + message;
}

var message = howdy('Greg Rowe ', ' hi!');
console.log(message);

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    }
    if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    }
    if (string.length == 7) {
        console.log('7, what a perfect choice!');
    }
};

function inception(display, favMovie) {
    display(favMovie);
}
