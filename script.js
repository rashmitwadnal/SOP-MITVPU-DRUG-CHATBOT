// script.js

// Drug Database

const drugs = {
    paracetamol: {
        name: "Paracetamol",
        dosage: "500 mg every 4-6 hours",
        uses: "Used to reduce fever and relieve mild to moderate pain.",
        sideEffects: "Nausea, allergic reactions, liver damage in overdose."
    },

    ibuprofen: {
        name: "Ibuprofen",
        dosage: "200-400 mg every 6-8 hours",
        uses: "Used for pain, inflammation, and fever.",
        sideEffects: "Stomach pain, nausea, dizziness, acidity."
    },

    aspirin: {
        name: "Aspirin",
        dosage: "300-600 mg as prescribed",
        uses: "Used for pain relief, fever, and blood thinning.",
        sideEffects: "Bleeding, stomach irritation, heartburn."
    },

    omeprazole: {
        name: "Omeprazole",
        dosage: "20 mg once daily",
        uses: "Used to treat acidity, GERD, and stomach ulcers.",
        sideEffects: "Headache, diarrhea, abdominal pain."
    }
};

// Search Function

function searchDrug(){

    const input = document.getElementById("drugInput").value.toLowerCase();

    const result = drugs[input];

    if(result){

        document.getElementById("drugName").innerText = result.name;
        document.getElementById("drugDosage").innerText = result.dosage;
        document.getElementById("drugUses").innerText = result.uses;
        document.getElementById("drugEffects").innerText = result.sideEffects;

    }
    else{

        document.getElementById("drugName").innerText = "Drug Not Found";
        document.getElementById("drugDosage").innerText = "-";
        document.getElementById("drugUses").innerText = "-";
        document.getElementById("drugEffects").innerText = "-";

    }

}
