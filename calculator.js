function appendToDisplay(value)
{
    const screen=document.querySelector('.screen');
    screen.textContent += value;
}
function clearDisplay()
{
    const screen=document.querySelector('.screen');
    screen.textContent ='';
}
function calculateResult()
{
    try
    {
        const screen=document.querySelector('.screen');
    screen.textContent=eval(screen.textContent);
    }catch(error)
    {
        const screen=document.querySelector('.screen');
        alert('Error');
    }

}
