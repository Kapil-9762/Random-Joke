        const apiURL="https://icanhazdadjoke.com/";  //api url for a random joke

        let joke=document.querySelector("#jokes");
        let newJoke=document.querySelector("#btnJoke");

        //1.using .then() and .catch()
        // function newRandomJoke(){
        //     fetch(apiURL,{
        //         headers:{
        //             Accept:"Application/json"
        //         }
        //     })
        //     .then((res)=>{
        //         // console.log(res);
        //         return res.json();
        //     })
        //     .then((data)=>{
        //         jokes.innerText=data.joke;
        //     })
        //     .catch((err)=>{
        //         // console.log("I am sorry:",err);
        //         jokes.innerText="Sorry, API is not found";
        //     })
        // }

        function shrinkBtn(){
            newJoke.style.transform = "scale(0.89)";
        }
        function restorekBtn(){
            newJoke.style.transform = "scale(1)";
        }
        // using async await
        async function newRandomJoke(){
    
            
            //Error handing
            try{
                shrinkBtn();
            const res=await fetch(apiURL, {
                headers:{
                    accept:"application/json"
                }
            });
            const data=await res.json();
            // console.log(data);
            jokes.innerText=data.joke;
            restorekBtn();
         }catch(error){   //catch block to handle error
            // console.log(error);
            jokes.innerText="Sorry, API is not found";
         }
            
        }
        newRandomJoke();
        newJoke.addEventListener('click', newRandomJoke);
        // newJoke.addEventListener('click', ()=>{
        //     newJoke.style.transform="scale(0.9)";
        // });