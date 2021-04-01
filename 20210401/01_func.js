const func = function()
{
    console.log("안녕1")
    console.log("안녕2")
}
func()

function func2()
{
    console.log("안녕3")
}
func2()

function func3(param)
{
    console.log(param)
}
func3([1,2,3,4])
func3("1234")
func3(1234)

//매개변수 받고, 리턴값 주는 것도 가능함
function f(x)
{
    return x*x
}
console.log(f(10))