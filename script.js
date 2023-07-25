const row = document.querySelector('.row');
const select =document.querySelector('#select')


const handleGetFlags =() => {
    fetch(`https://restcountries.com/v3.1/region/${select.value}`)
        .then(res => res.json())
        .then(data => {
            data. reverse() .map (country =>{
                row.innerHTML += `
                    <div class="col-4">
                         <div class="box">
                              <img src=${country.flags.png} alt="">
                                  <h3> ${country.name.official}</h3>
                                  <p>${country.capital}</p>
                    </div>
                 </div>
                 `
            })
        })
}

select.addEventListener('change',()=>{
    console.log(select.value);
    row.innerHTML='';
    handleGetFlags();
})

