const people = [
    {
        name : 'Jamie Williams',
        age : 26,
        gender : 'female',
        location : 'London, UK',
        imageURL : 'https://randomuser.me/api/portraits/women/1.jpg',
        looking : 'Female looking for male',
    },
    {
        name : 'John Smith',
        age : 35,
        gender : 'male',
        location : 'New York, NY',
        imageURL : 'https://randomuser.me/api/portraits/men/1.jpg',
        looking : 'Male looking for female',
    },
    {
        name : 'Harsh Yadav',
        age : 22,
        gender : 'Male',
        location : 'Aligarh, India',
        imageURL : './img/Harsh.jpg',
        looking : 'Male looking for female',
    },
    {
        name : 'Bob Johnson',
        age : 42,
        gender : 'male',
        location : 'Chicago, IL',
        imageURL : 'https://randomuser.me/api/portraits/men/2.jpg',
        looking : 'Male looking for female',
    },
    {
        name : 'Claire Perry',
        age : 31,
        gender : 'female',
        location : 'California, CA',
        imageURL : 'https://randomuser.me/api/portraits/women/10.jpg',
        looking : 'Female looking for male',
    },
    {
        name : 'Lillian Parker',
        age : 25,
        gender : 'female',
        location : 'Galway, Maryland',
        imageURL : 'https://randomuser.me/api/portraits/women/64.jpg',
        looking : 'Female looking for male',
    },
    {
        name : 'Govind Raghav',
        age : 22,
        gender : 'Male',
        location : 'ALigarh, India',
        imageURL : './img/Govind.jpg',
        looking : 'Male looking for female',
    },
    {
        name : 'Shannon Jackson',
        age : 29,
        gender : 'female',
        location : 'Los Angeles, CA',
        imageURL : 'https://randomuser.me/api/portraits/women/2.jpg',
        looking : 'Female looking for male',
    },    
    {
        name : 'Pawan Thakunna',
        age : 24,
        gender : 'Male',
        location : 'Pithoragarh, India',
        imageURL : './img/Pawan.jpg',
        looking : 'Male looking for female',
    },
]

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function* createPersonIterator() {
    let index = 1;
    while(true) {
        yield people[index++ % people.length];
    }
}

const iterator = createPersonIterator();
nextBtn.addEventListener('click', () => {
    const person = iterator.next().value;
    img.src = person.imageURL;
    document.querySelector('h3').textContent = person.name;
    document.querySelectorAll('p')[0].textContent = `${person.age} years Old`;
    document.querySelectorAll('p')[1].textContent = `From ${person.location}`;
    document.querySelectorAll('p')[2].textContent = person.looking;  
})