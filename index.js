console.log('This is my index .js');
// Date is an array of object which contain information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Golu js',
        age: 28,
        city: 'Kolkata',
        language: 'javascript',
        framework: 'angular',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },

    {
        name: 'Avinash',
        age: 22,
        city: 'Kolkata',
        language: 'Javascript',
        framework: 'reactjs',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },

    {
        name: 'neha',
        age: 24,
        city: 'Saharsa',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },

    {
        name: 'jayshree',
        age: 26,
        city: 'Patna',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    }
]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}      
        }
    };
}

// Button listner for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV()

function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if  (currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name:- ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} year old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily work on ${currentCandidate.language}</li>
    <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('end of candedate Applications');
        window.location.reload();
    }
};