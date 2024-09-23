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

// total amount
const totalAmount = document.getElementById('total-amount').innerText;

// Donate Now Button function 1
function addAmount1(){
    const heading1 = document.getElementById('heading-1').innerText;
    const input1 = document.getElementById('input-1').value;
    if(isNaN(input1) == false && input1 > 0){
        const increaseAmount1 = document.getElementById('increase-amount-1');
        const increase1 = parseFloat(increaseAmount1.innerText) + parseFloat(input1);
        document.getElementById('increase-amount-1').innerText = increase1;
        const decrease = parseFloat(totalAmount) - parseFloat(input1);
        document.getElementById('total-amount').innerText = decrease;
        // History section
        let date = new Date();
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('p-4');
        div.innerHTML = `
        <h1 class="text-base md:text-lg font-medium md:font-semibold">${input1} Taka is ${heading1}</h1>
        <p>${date}</p>
        `
        document.getElementById('historyContent').appendChild(div);
        document.getElementById('no-history').classList.add('hidden')
        my_modal_1.showModal()
    }
    else{
        alert('hi')
    }
}

// Donate Now Button function 2
function addAmount2(){
    const input2 = document.getElementById('input-2').value;
    const heading2 = document.getElementById('heading-2').innerText;
    if(isNaN(input2) == false && input2 > 0){
        const increaseAmount2 = document.getElementById('increase-amount-2');
        const increase2 = parseFloat(increaseAmount2.innerText) + parseFloat(input2);
        document.getElementById('increase-amount-2').innerText = increase2;
        const decrease = parseFloat(totalAmount) - parseFloat(input2);
        document.getElementById('total-amount').innerText = decrease;
        // History section
        let date = new Date();
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('p-4');
        div.innerHTML = `
        <h1>${input2} Taka is ${heading2}</h1>
        <p>${date}</p>
        `
        document.getElementById('historyContent').appendChild(div);
        my_modal_1.showModal()
    }
    else{
        alert('hi')
    }
}
// Donate Now Button function 3
function addAmount3(){
    const input3 = document.getElementById('input-3').value;
    const heading3 = document.getElementById('heading-3').innerText;
    if(isNaN(input3) == false && input3 > 0){
        const increaseAmount3 = document.getElementById('increase-amount-3');
        const increase3 = parseFloat(increaseAmount3.innerText) + parseFloat(input3);
        document.getElementById('increase-amount-3').innerText = increase3;
        const decrease = parseFloat(totalAmount) - parseFloat(input3);
        document.getElementById('total-amount').innerText = decrease;
        // History section
        let date = new Date();
        const div = document.createElement('div');
        div.classList.add('border-2');
        div.classList.add('rounded-lg');
        div.classList.add('p-4');
        div.innerHTML = `
        <h1>${input3} Taka is ${heading3}</h1>
        <p>${date}</p>
        `
        document.getElementById('historyContent').appendChild(div);
        my_modal_1.showModal()
    }
    else{
        alert('hi')
    }
}