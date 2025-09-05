// 1) Crie uma função que peça ao usuário para digitar 5 números, armazene-os em um vetor e depois calcule a soma de todos os elementos.
function challenge01(){
    let vetNum=[];
    let numSum=0;

        for(let i=0; i<5; i++){
            vetNum.push(parseInt(prompt(`Insira o ${i+1}º número:`)));
            numSum+=vetNum[i]
        }

    alert(`A soma dos números inseridos é ${numSum}.`)

    
}

// 2) Crie uma função que leia 5 números, armazene-os em um vetor e exiba qual é o maior número.
function challenge02(){
    let vetNum=[];
    let largstNum=-Infinity;

        for(let i=0; i<5; i++){
            vetNum.push(parseInt(prompt(`Insira o ${i+1}º número:`)))
        }

        for(let i=0; i<vetNum.length; i++){
                if (vetNum[i]>largstNum){
                    largstNum=vetNum[i];
                }
            
        }
        
        alert(`Maior número:\n${largstNum}`)

}

// 3) Crie uma função que leia 5 nomes, armazene-os em um vetor e depois exiba os nomes na ordem inversa.
function challenge03(){
    let vetName=[];

        for(let i=0; i<5; i++){
            vetName.push(prompt(`Insira o ${i+1}º filme:`))
        }

    alert(`A ordem inversa dos filmes informados é:\n${vetName.reverse().join(";\n")}`)
}

// 4) Crie uma função que leia 6 números inteiros, armazene-os em um vetor e depois conte quantos são pares.
function challenge04(){
    let vetNum=[];
    let vetEvenNum=[];

    for(let i=0; i<6; i++){
        vetNum.push(parseInt(prompt(`Insira o ${i+1}º número:`)))
    }
    for(let i=0; i<vetNum.length; i++){
        if (vetNum[i]%2==0){
            vetEvenNum.push(vetNum[i])
        }
    }

    alert(`Quantidade de números pares: ${vetEvenNum.length}\nNúmeros pares: ${vetEvenNum}`)

}

// 5) Crie uma função que leia 5 nomes, armazene-os em um vetor e depois peça ao usuário para digitar um nome para pesquisar. Informe se o nome está no vetor ou não.
function challenge05(){
    let vetName=[];

        for(let i=0; i<5; i++){
            vetName.push(prompt(`Insira o ${i+1}º nome:`))
        }
    
    let nameFind=prompt(`Qual filme você deseja procurar na lista?`)
        
        if (vetName.includes(nameFind)){
            alert(`O filme "${nameFind}" está na lista!`)    
        }else{
            alert(`O filme "${nameFind}" não está na lista!`)    
        }
}

// 6) Crie uma função que leia 4 notas de um aluno, armazene em um vetor, calcule a média e informe se ele está aprovado (média ≥ 7) ou reprovado.
function challenge06(){
    let vetGrade=[];
    let gradeAverage=0

        for(let i=0; i<4; i++){
            vetGrade.push(parseInt(prompt(`Insira a ${i+1}ª nota:`)))
            gradeAverage+=vetGrade[i]
            console.log(gradeAverage)
        }

    gradeAverage=gradeAverage/vetGrade.length

        alert(`A média dos números informados é ${gradeAverage}.`)

}
