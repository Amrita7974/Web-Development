for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}

var i = 99;
while (i > 0)
{
    console.log(i + " ball");
    i -= 1;
}

for (var i = 0; i < 100; i++)
{
    if (i % 2 == 0)
    {
         continue;
    }
    
    console.log(i + " is an odd number.");
}

var i = 99;
while (true)
{
    console.log(i + " hello");
    i -= 1;
    if (i == 0)
    {
        break;
    }
}