var subject = "cn";
function ci(s){
    // $.subjectsh(s);

    var unitimg = document.getElementById('unitimg');
    var unitimgchange = document.getElementById('unitimgchange');
    var unitlist1 = document.getElementById('unitlist1');
    var unitlist2 = document.getElementById('unitlist2');
    var unitlistline1 = document.getElementById('unitlistline1');
    var qpaper = document.getElementById('qpaper');
    var unitlistline2 = document.getElementById('unitlistline2');
    var lm = document.getElementById('lm');
    var display = document.getElementById('display');
    var others = document.getElementById('others');
    var othersimg1 = document.getElementById('othersimg1');
    var othersimg2 = document.getElementById('othersimg2');
    var oimg1 = document.getElementById('oimg1');
    var oimg2 = document.getElementById('oimg2');
    var othersname1 = document.getElementById('othersname1');
    var othersname2 = document.getElementById('othersname2');
    let ids = ["cn", "dsa", "dld", "dwdm", "spm", "devops", "others"];
    if(s == ids[0]){    

        unitimg.style.opacity = '1';
        unitimg.style.transition = '0.1s';
        unitimgchange.src = "cn.jpg";

        unitlist1.style.opacity = '1';
        unitlist1.style.transition = '0.5s';
        unitlist2.style.opacity = '1';
        unitlist2.style.transition = '0.5s';

        unitslistline1.style.opacity = '1';
        unitslistline1.style.transition = '0.5s';
        
        qpaper.style.opacity = '1';
        qpaper.style.transition = '0.5s';
        
        unitslistline2.style.opacity = 1;
        unitslistline2.style.transition = '0.3s';
        
        lm.style.top = '0';
        lm.style.opacity = '1';
        lm.style.transition = '0.4s';
        

        units.style.top = '-47.5vh';
        units.style.transition = '0.5s';
        
        subject =s;
        display.innerHTML = "<ul><li><a href= '1.pdf' target='_blank' id='pdf1'>cn unit-1.pdf</a></li></ul>";
        display.style.opacity = "1";
        display.style.transition = '0.7s';

        oimg1.style.opacity = '0';
        oimg1.style.transition = '0.5s';

        oimg2.style.opacity = '0';
        oimg2.style.transition = '0.5s';

        othersname1.style.opacity = '0';
        othersname1.style.transition = '0.5s';

        othersname2.style.opacity = '0';
        othersname2.style.transition = '0.5s';
        // document.getElementsById('unit2.classList.remove("unitslistactive");
        
        }
    else if(s == ids[1]){
        unitimg.style.opacity = '1';
        unitimg.style.transition = '0.4s';

        unitimgchange.src = "dsa.jpg";

        unitlist1.style.opacity = '1';
        unitlist1.style.transition = '0.5s';
        unitslistline1.style.opacity = '1';
        unitslistline1.style.transition = '0.5s';
        qpaper.style.opacity = '1';
        qpaper.style.transition = '0.5s';

        unitlist2.style.opacity = '1';
        unitlist2.style.transition = '0.5s';
        unitslistline2.style.opacity = '0';
        unitslistline2.style.transition = '0.5s';

        lm.style.opacity = '0';
        lm.style.transition = '0.4s';
        units.style.top = '-40vh';
        units.style.transition = '0.5s';
        subject = s;
        display.style.opacity = "1";
        display.style.transition = '0.5s';
        display.innerHTML = "<ul><li><a href= '1.pdf' target='_blank' id='pdf1'>dsa unit-1.pdf</a></li></ul>";

        oimg1.style.opacity = '0';
        oimg1.style.transition = '0.5s';

        oimg2.style.opacity = '0';
        oimg2.style.transition = '0.5s';

        othersname1.style.opacity = '0';
        othersname1.style.transition = '0.5s';

        othersname2.style.opacity = '0';
        othersname2.style.transition = '0.5s';
    }
    else if(s == ids[2]){
        unitimg.style.opacity = '1';
        unitimg.style.transition = '0.5s';

        unitimgchange.src = "dld.jpg";
        // .style.marginTop = '0vh';

        unitlist1.style.opacity = '1';
        unitlist1.style.transition = '0.5s';
        unitslistline1.style.opacity = '1';
        unitslistline1.style.transition = '0.5s';
        qpaper.style.opacity = '1';
        qpaper.style.transition = '0.5s';

        unitlist2.style.opacity = '1';
        unitlist2.style.transition = '0.5s';
        unitslistline2.style.opacity = '0';
        unitslistline2.style.transition = '0.5s';

        lm.style.opacity = '0';
        lm.style.transition = '0.3s';
        units.style.top = '-40vh';
        units.style.transition = '0.5s';
        subject = s;
        display.style.opacity = "1";
        display.style.transition = '0.5s';
        display.innerHTML = "<ul><li><a href= '1.pdf' target='_blank' id='pdf1'>dld unit-1.pdf</a></li></ul>";

        oimg1.style.opacity = '0';
        oimg1.style.transition = '0.5s';

        oimg2.style.opacity = '0';
        oimg2.style.transition = '0.5s';

        othersname1.style.opacity = '0';
        othersname1.style.transition = '0.5s';

        othersname2.style.opacity = '0';
        othersname2.style.transition = '0.5s';
    }
    else if(s == ids[3]){
        unitimg.style.opacity = '1';
        unitimg.style.transition = '0.5';

        unitimgchange.src = "dwdm.jpg";
        lm.style.top = '0';

        unitlist1.style.opacity = '1';
        unitlist1.style.transition = '0.5';
        unitslistline1.style.opacity = '1';
        unitslistline1.style.transition = '0.5s';
        qpaper.style.opacity = '1';
        qpaper.style.transition = '0.5s';

        unitlist2.style.opacity = '1';
        unitlist2.style.transition = '0.5s';
        unitslistline2.style.opacity = '1';
        unitslistline2.style.transition = '0.5s';

        lm.style.opacity = '1';
        lm.style.transition = '0.5s';
        units.style.top = '-47.5vh';
        units.style.transition = '0.5s';

        subject = s;
        display.style.opacity = "1";
        display.style.transition = '0.5s';
        display.innerHTML = "<ul><li><a href= '1.pdf' target='_blank' id='pdf1'>dwdm unit-1.pdf</a></li></ul>";

        oimg1.style.opacity = '0';
        oimg1.style.transition = '0.5s';

        oimg2.style.opacity = '0';
        oimg2.style.transition = '0.5s';

        othersname1.style.opacity = '0';
        othersname1.style.transition = '0.5s';

        othersname2.style.opacity = '0';
        othersname2.style.transition = '0.5s';
    }
    else if(s == ids[4]){
        unitimg.style.opacity = '1';
        unitimg.style.transition = '0.5';

        unitimgchange.src = "spm.jpg";
        // units.style.marginTop = '0vh';

        unitlist1.style.opacity = '1';
        unitlist1.style.transition = '0.5';
        unitslistline1.style.opacity = '1';
        unitslistline1.style.transition = '0.5';
        qpaper.style.opacity = '1';
        qpaper.style.transition = '0.5';

        unitlist2.style.opacity = '1';
        unitlist2.style.transition = '0.5';
        unitslistline2.style.opacity = '0';
        unitslistline2.style.transition = '0.5';

        lm.style.opacity = '0';
        lm.style.transition = '0.5s';
        units.style.top = '-40vh';
        units.style.transition = '0.5s';
        subject = s;
        display.style.opacity = "1";
        display.style.transition = '0.5s';
        display.innerHTML = "<ul><li><a href= '1.pdf' target='_blank' id='pdf1'>spm unit-1.pdf</a></li></ul>";

        oimg1.style.opacity = '0';
        oimg1.style.transition = '0.5s';

        oimg2.style.opacity = '0';
        oimg2.style.transition = '0.5s';

        othersname1.style.opacity = '0';
        othersname1.style.transition = '0.5s';

        othersname2.style.opacity = '0';
        othersname2.style.transition = '0.5s';
    }
    else if(s==ids[5]){
        unitimg.style.opacity = '1';
        unitimg.style.transition = '0.5';

        unitimgchange.src = "devops.jpg";

        unitlist1.style.opacity = '0';
        unitlist1.style.transition = '0.5';

        unitslistline1.style.opacity = '0';
        unitslistline1.style.transition = '0.5';

        unitlist2.style.opacity = '0';
        unitlist2.style.transition = '0.5';

        unitslistline2.style.opacity = '0';
        unitslistline2.style.transition = '0.5';

        qpaper.style.opacity = '0';
        qpaper.style.transition = '0.5';

        lm.style.opacity = '1';
        lm.style.transition = '0.5s';
        lm.style.top = '-23vh';
        
        // units.style.top = '-67vh';
        units.style.transition = '0.5s';
        subject = s;
        display.style.opacity = "1";
        display.style.transition = '0.5s';
        display.innerHTML = "<ul><li><a href= '1.pdf' target='_blank' id='pdf1'>Lab Manual</a></li></ul>";

        oimg1.style.opacity = '0';
        oimg1.style.transition = '0.4s';

        oimg2.style.opacity = '0';
        oimg2.style.transition = '0.4s';

        othersname1.style.opacity = '0';
        othersname1.style.transition = '0.4s';

        othersname2.style.opacity = '0';
        othersname2.style.transition = '0.4s';
    }
    else if(s==ids[6]){
        unitlist1.style.opacity = '0';
        unitlist1.style.transition = '0.5';

        unitslistline1.style.opacity = '0';
        unitslistline1.style.transition = '0.5';

        unitlist2.style.opacity = '0';
        unitlist2.style.transition = '0.5';

        unitslistline2.style.opacity = '0';
        unitslistline2.style.transition = '0.5';

        qpaper.style.opacity = '0';
        qpaper.style.transition = '0.5';

        lm.style.opacity = '0';
        lm.style.marginTop = '5vh';
        lm.style.transition = '0.35s';

        unitimg.style.opacity = '0';
        // unitimg.style.transition = '8.5';
        display.style.opacity = '0';
        display.style.transition = '0.5';

        others.style.display = 'flex';
        oimg1.style.opacity = '1';
        oimg1.style.transition = '0.5s';

        oimg2.style.opacity = '1';
        oimg2.style.transition = '0.5s';

        othersname1.style.opacity = '1';
        othersname1.style.transition = '0.5s';

        othersname2.style.opacity = '1';
        othersname2.style.transition = '0.5s';


    }
}
var cn = ['dld/1/DLD Mid-1 Question Bank.pdf', "cn/1/2.pdf", "cn/2/1.pdf", "cn/2/2.pdf", "cn/3/1.pdf", "cn/3/2.pdf", "cn/4/1.pdf", "cn/4/2.pdf", "cn/5/1.pdf", "cn/5/2.pdf", "cn/CN Mid-1 Question Bank.pdf", "cn/CN Mid-2 Question Bank.pdf", "cn/cn r20.pdf", "cn/lab-manual.pdf"];
var dsa = ["dsa/1/1.pdf", "dsa/1/2.pdf", "dsa/2/1.pdf", "dsa/2/2.pdf", "dsa/3/1.pdf", "dsa/3/2.pdf", "dsa/4/1.pdf", "dsa/4/2.pdf", "dsa/5/1.pdf", "dsa/5/2.pdf", "dsa/DSA Mid-1 Question Bank.pdf", "dsa/DSA Mid-2 Question Bank.pdf", "dsa/dsa r20.pdf"];
var dld = ["dld/1/1.pdf", "dld/1/2.pdf", "dld/2/1.pdf", "dld/2/2.pdf", "dld/3/1.pdf", "dld/3/2.pdf", "dld/4/1.pdf", "dld/4/2.pdf", "dld/5/1.pdf", "dld/5/2.pdf", 'dld/DLD Mid-1 Question Bank.pdf', "dld/DLD Mid-2 Question Bank.pdf", "dld/dld r20.pdf"];
var dwdm = ["dwdm/1/1.pdf", "dwdm/1/2.pdf", "dwdm/2/1.pdf", "dwdm/2/2.pdf", "dwdm/3/1.pdf", "dwdm/3/2.pdf", "dwdm/4/1.pdf", "dwdm/4/2.pdf", "dwdm/5/1.pdf", "dwdm/5/2.pdf", "dwdm/DWDM Mid-1 Question Bank.pdf", "dwdm/DWDM Mid-2 Question Bank.pdf", "dwdm/dwdm r20.pdf", "dwdm/lab-manual.pdf"];
var spm = ["spm/1/1.pdf", "spm/1/2.pdf", "spm/2/1.pdf", "spm/2/2.pdf", "spm/3/1.pdf", "spm/3/2.pdf", "spm/4/1.pdf", "spm/4/2.pdf", "spm/5/1.pdf", "spm/5/2.pdf", "spm/SPM Mid-1 Question Bank.pdf", "spm/SPM Mid-2 Question Bank.pdf", "spm/spm r20.pdf"];
var devops = "devops/lab manual.pdf";
var dd = "dld/DLD Mid-1 Question Bank.pdf";
function u(u){
    var display = document.getElementById('display');
    var unit1 = document.getElementById('unit1').style;
    var unit2 = document.getElementById('unit2');
    var unit3 = document.getElementById('unit3');
    var unit4 = document.getElementById('unit4');
    var unit5 = document.getElementById('unit5');
    var midq = document.getElementById('midq');
    var pqp = document.getElementById('pqp');
    var lm = document.getElementById('lm');
    if(subject == "cn"){
        if(u == 'u1'){
            display.innerHTML = "<ul><li><a href= "+ cn[0] +" target='_blank' id='pdf1'>cn unit-1.pdf</a></li></ul>";
            display.style.opacity = "1";
            display.style.transition = '0.5s'; 
            // unit1.boxShadow = "1px 1px 10px 1px #fff";
            // unit2.removeProperty("box-shadow");
            // unit3.removeProperty("box-shadow");
            // unit4.removeProperty("box-shadow");
            // unit5.removeProperty("box-shadow");
            // midq.removeProperty("box-shadow");
            // pqp.removeProperty("box-shadow");
            // lm.removeProperty("box-shadow");

        }
        else if(u=='u2'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + cn[2] + " target='_blank' id='pdf1'>cn unit-2.pdf</a></li></ul>";
            // unit1.removeProperty("box-shadow");

        }
        else if(u=='u3'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ cn[4] +" target='_blank' id='pdf1'>cn unit-3.pdf</a></li></ul>";
        }
        else if(u=='u4'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= '' target='_blank' id='pdf1'>cn unit-4.pdf</a></li></ul>";
        }
        else if(u=='u5'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ cn[8] +" target='_blank' id='pdf1'>cn unit-5.pdf</a></li></ul>";
        }
        else if(u=='u6'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ cn[10] +" target='_blank' id='pdf1'>Mid-1</a></li><li><a href= "+ cn[11] +" target='_blank' id='pdf1'>Mid-2</a></li></ul>";
        }
        else if(u=='u7'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ cn[12] +" target='_blank' id='pdf1'>Q Papers</a></li>";
        }
        else if(u=='lm'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ cn[13] +" target='_blank' id='pdf1'>Lab Manual</a></li></ul>";
        }
    }
    else if(subject == "dsa"){
        if(u == 'u1'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dsa[0] + " target='_blank' id='pdf1'>dsa unit-1.pdf</a></li></ul>";           
        }
        else if(u=='u2'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dsa[2] + " target='_blank' id='pdf1'>dsa unit-2.pdf</a></li></ul>";
        }
        else if(u=='u3'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dsa[4] + " target='_blank' id='pdf1'>dsa unit-3.pdf</a></li></ul>";
        }
        else if(u=='u4'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dsa[6] + " target='_blank' id='pdf1'>dsa unit-4.pdf</a></li></ul>";
        }
        else if(u=='u5'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dsa[8] + " target='_blank' id='pdf1'>dsa unit-5.pdf</a></li></ul>";
        }
        else if(u=='u6'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ dsa[10] +" target='_blank' id='pdf1'>Mid-1</a></li><li><a href= "+ dsa[11] +" target='_blank' id='pdf2'>Mid-2</a></li></ul>"; 
        }
        else if(u=='u7'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= "+ dsa[12] +" target='_blank' id='pdf1'>Q Papers</a></li>";
        }
    }
    else if(subject == "dld"){
        if(u == 'u1'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dld[0] + " target='_blank' id='pdf1'>dld unit-1.pdf</a></li></ul>"; 
        }
        else if(u=='u2'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dld[2] + " target='_blank' id='pdf1'>dld unit-2.pdf</a></li></ul>";
        }
        else if(u=='u3'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dld[4] + " target='_blank' id='pdf1'>dld unit-3.pdf</a></li></ul>"; 
        }
        else if(u=='u4'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dld[6] + " target='_blank' id='pdf1'>dld unit-4.pdf</a></li></ul>";
        }
        else if(u=='u5'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dld[8] + " target='_blank' id='pdf1'>dld unit-5.pdf</a></li></ul>";
        }
        else if(u=='u6'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= 'dld/DLD Mid-1 Question Bank.pdf' target='_blank' id='pdf1'>Mid-1</a></li><li><a href= " + dd + " target='_blank' id='pdf2'>Mid-2</a></li></ul>"; 
        }
        else if(u=='u7'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= " + dld[12] + " target='_blank' id='pdf1'>Q Papers</a></li>";
        }
    }
    else if(subject == "dwdm"){
        if(u == 'u1'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= " + dwdm[0] + " target='_blank' id='pdf1'>dwdm unit-1.pdf</a></li></ul>"; 
        }
        else if(u=='u2'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dwdm[2] + " target='_blank' id='pdf1'>dwdm unit-2.pdf</a></li></ul>"; 
        }
        else if(u=='u3'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dwdm[4] + " target='_blank' id='pdf1'>dwdm unit-3.pdf</a></li></ul>"; 
        }
        else if(u=='u4'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dwdm[6] + " target='_blank' id='pdf1'>dwdm unit-4.pdf</a></li></ul>"; 
        }
        else if(u=='u5'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + dwdm[8] + " target='_blank' id='pdf1'>dwdm unit-5.pdf</a></li></ul>";
        }
        else if(u=='u6'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= " + dwdm[10] + " target='_blank' id='pdf1'>Mid-1</a></li><li><a href= " + dwdm[11] + " target='_blank' id='pdf2'>Mid-2</a></li></ul>";
        }
        else if(u=='u7'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= " + dwdm[12] + " target='_blank' id='pdf1'>Q Papers</a></li>";
        }
        else if(u=='lm'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= " + dwdm[13] + " target='_blank' id='pdf1'>Lab Manual</a></li></ul>";
        }
    }
    else if(subject == "spm"){
        if(u == 'u1'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[0] + " target='_blank' id='pdf1'>spm unit-1.pdf</a></li></ul>";  
        }
        else if(u=='u2'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[2] + " target='_blank' id='pdf1'>spm unit-2.pdf</a></li></ul>";
        }
        else if(u=='u3'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[4] + " target='_blank' id='pdf1'>spm unit-3.pdf</a></li></ul>"; 
        }
        else if(u=='u4'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[6] + " target='_blank' id='pdf1'>spm unit-4.pdf</a></li></ul>";
        }
        else if(u=='u5'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[8] + " target='_blank' id='pdf1'>spm unit-5.pdf</a></li></ul>";
        }
        else if(u=='u6'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[10] + " target='_blank' id='pdf1'>Mid-1</a></li><li><a href= " + spm[11] + " target='_blank' id='pdf2'>Mid-2</a></li></ul>";
        }
        else if(u=='u7'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href=" + spm[12] + " target='_blank' id='pdf1'>Q Papers</a></li>"; 
        }
    }
    else if(subject == "devops"){
        if(u == 'lm'){
            display.style.opacity = "1";
            display.style.transition = '0.5s';
            display.innerHTML = "<ul><li><a href= " + devops + " target='_blank' id='pdf1'>Lab Manual</a></li>";
              
        }
    }
}