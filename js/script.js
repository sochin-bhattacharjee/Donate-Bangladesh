// Donation Button Switching & other functionality
document.getElementById('donation').addEventListener('click',function(){
    document.getElementById('history').classList.remove('bg-lime-300')
    document.getElementById('donation').classList.add('bg-lime-300')
    document.getElementById('donationContent').classList.remove('hidden')
    document.getElementById('historyContent').classList.add('hidden')
})

// History Button Switching & other functionality
document.getElementById('history').addEventListener('click',function(){
    document.getElementById('history').classList.add('bg-lime-300')
    document.getElementById('donation').classList.remove('bg-lime-300')
    document.getElementById('historyContent').classList.remove('hidden')
    document.getElementById('donationContent').classList.add('hidden')
})