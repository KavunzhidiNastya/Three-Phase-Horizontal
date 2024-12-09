// Get DOM elements
const qg1 = document.getElementById("qg");
const qo1 = document.getElementById("qo");
const qw1 = document.getElementById("qw");
const po1 = document.getElementById("po");
const to1 = document.getElementById("to");
const sg1 = document.getElementById("sg");
const sgo1 = document.getElementById("sgo");
const sgw1 = document.getElementById("sgw");
const mo1 = document.getElementById("mo");
const mw1 = document.getElementById("mw");
const dml1 = document.getElementById("dml");
const dmw1 = document.getElementById("dmw");
const dmo1 = document.getElementById("dmo");
const z1 = document.getElementById("z");
const m1 = document.getElementById("m");
const tro1 = document.getElementById("tro");
const trw1 = document.getElementById("trw");
const cdi = 0.34
const calculateBtn1 = document.getElementById("calculate-btn1");
const resultDisplay1 = document.getElementById("result1");
const calculateBtn2 = document.getElementById("calculate-btn2");
const resultDisplay2 = document.getElementById("result2");

// Add click event listener to the button
calculateBtn1.addEventListener("click", () => {
    // Parse input values as numbers
    const qo = parseFloat(qo1.value);
    const qw = parseFloat(qw1.value);
    const tro = parseFloat(tro1.value) || 1;
    const trw = parseFloat(trw1.value);
    
    // Check if inputs are valid numbers
    // if (isNaN(number1) || isNaN(number2)) {
    //     resultDisplay.textContent = "Invalid input. Please enter valid numbers.";
    //     return;
    // }

    //шаг 1
    const awa = 0.5*(trw*qw)/((tro*qo)+(trw*qw))
    // Display the result1
    resultDisplay1.textContent = awa;
});

calculateBtn2.addEventListener("click", () => {
    // Parse input values as numbers
    const qg = parseFloat(qg1.value);
    const qo = parseFloat(qo1.value);
    const qw = parseFloat(qw1.value);
    const po = parseFloat(po1.value) || 1;
    const to = parseFloat(to1.value) || 1;
    const sg = parseFloat(sg1.value);
    const sgo = parseFloat(sgo1.value);
    const sgw = parseFloat(sgw1.value);
    const mo = parseFloat(mo1.value);
    const mw = parseFloat(mw1.value);
    const dml = parseFloat(dml1.value);
    const dmw = parseFloat(dmw1.value);
    const dmo = parseFloat(dmo1.value);
    const z = parseFloat(z1.value);
    const m = parseFloat(m1.value);
    const tro = parseFloat(tro1.value);
    const trw = parseFloat(trw1.value);
    
    // Check if inputs are valid numbers
    // if (isNaN(number1) || isNaN(number2)) {
    //     resultDisplay.textContent = "Invalid input. Please enter valid numbers.";
    //     return;
    // }

    //шаг 1
    const pl = 62.4 * (141.5/(131.5 + sgo))

    const api = (141.5/(141.5/(sgo+131.5))-131.5)

    const dsg = sgw - api
    // шаг 2
    console.log({po, to, sg, z, dm})
    const pg = 2.7 * ((sg * po)/(to * z))
    console.log(pg)

    // шаг 11
    const d = 5040 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5)

    const s1 = (((to+460)*z*qg)/po)
    const s2 = Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5)

    console.log({s1, s2})

    //шаг 12 считаем  все leffg

    var dt = 16
    const leffg16 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg16").innerText = leffg16.toFixed(2);
    var dt = 20
    const leffg20 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg20").innerText = leffg20.toFixed(2);
    var dt = 24
    const leffg24 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg24").innerText = leffg24.toFixed(2);
    var dt = 30
    const leffg30 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg30").innerText = leffg30.toFixed(2);
    var dt = 36
    const leffg36 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg36").innerText = leffg36.toFixed(2);
    var dt = 42
    const leffg42 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg42").innerText = leffg42.toFixed(2);
    var dt = 48
    const leffg48 = (420 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5))/dt
    document.getElementById("leffg48").innerText = leffg48.toFixed(2);

    //шаг 13 считаем  все leffl

    var dt = 16
    const leffl16 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl16").innerText = leffl16.toFixed(2);
    var dt = 20
    const leffl20 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl20").innerText = leffl20.toFixed(2);
    var dt = 24
    const leffl24 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl24").innerText = leffl24.toFixed(2);
    var dt = 30
    const leffl30 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl30").innerText = leffl30.toFixed(2);
    var dt = 36
    const leffl36 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl36").innerText = leffl36.toFixed(2);
    var dt = 42
    const leffl42 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl42").innerText = leffl42.toFixed(2);
    var dt = 48
    const leffl48 = (tr*(qo+qw))/(0.7*Math.pow(dt, 2))
    document.getElementById("leffl48").innerText = leffl48.toFixed(2);

       //шаг 14 считаем  все lss

    const lss16 = leffg16+leffl16+(d/12)
    document.getElementById("lss16").innerText = lss16.toFixed(2);
    const lss20 = leffg20+leffl20+(d/12)
    document.getElementById("lss20").innerText = lss20.toFixed(2);
    const lss24 = leffg24+leffl24+(d/12)
    document.getElementById("lss24").innerText = lss24.toFixed(2);
    const lss30 = leffg30+leffl30+(d/12)
    document.getElementById("lss30").innerText = lss30.toFixed(2);
    const lss36 = leffg36+leffl36+(d/12)
    document.getElementById("lss36").innerText = lss36.toFixed(2);
    const lss42 = leffg42+leffl42+(d/12)
    document.getElementById("lss42").innerText = lss42.toFixed(2);
    const lss48 = leffg48+leffl48+(d/12)
    document.getElementById("lss48").innerText = lss48.toFixed(2);

       //шаг 15 считаем  все sr

    
    const sr16 = (12*lss16)/24
    document.getElementById("sr16").innerText = sr16.toFixed(2);
    const sr20 = (12*lss20)/30
    document.getElementById("sr20").innerText = sr20.toFixed(2);
    const sr24 = (12*lss24)/36
    document.getElementById("sr24").innerText = sr24.toFixed(2);
    const sr30 = (12*lss30)/24
    document.getElementById("sr30").innerText = sr30.toFixed(2);
    const sr36 = (12*lss36)/30
    document.getElementById("sr36").innerText = sr36.toFixed(2);
    const sr42 = (12*lss42)/36
    document.getElementById("sr42").innerText = sr42.toFixed(2);
    const sr48 = (12*lss48)/24
    document.getElementById("sr48").innerText = sr48.toFixed(2);
  //  const sresult = [];

  //  sresult.push(s324, s330, s336, s342, s348, s224, s230, s236, s242, s124, s130, s136);

  //  const filteredNumbers = sresult.filter(num => {
  //   console.log("Checking number:", num);
  //   return num < 4;
  //   });

  //  const resultDiv = document.getElementById("result");
  //  resultDiv.textContent = `${filteredNumbers.join(", ")}`;

    
      
   

    // Display the result
    resultDisplay2.textContent = d;
});
