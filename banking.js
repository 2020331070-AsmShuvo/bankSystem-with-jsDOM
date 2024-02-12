// handle deposite button element
document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const depoAmount = depositeInput.value;
    depositeInput.value='';

    const depositMoney = document.getElementById('depo-money');
    depositMoney.innerText=depoAmount;


})