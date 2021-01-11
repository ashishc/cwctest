
var eqGraphParameter = `[{"band 1 - frequency": { "idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Frequency"}, "format": "number"}},
{"band 1 - gain": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Gain"}, "format": "number"}},
{"band 1 - filter": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Type"}, "format": "string"}},
{"band 1 - factor": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Q"}, "format": "number"}},
{"band 1 - enable": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Enable"}, "format": "norm"}},
{"band 1 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Active"}, "format": "norm"}},
{"band 1 - slope": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Slope"}, "format": "number"}},
{"band 1 - bandWidth": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Octave"}, "format": "number"}},
{"band 2 - frequency": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Frequency"}, "format": "number"}},
{"band 2 - gain": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Gain"}, "format": "number"}},
{"band 2 - filter": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Type"}, "format": "string"}},
{"band 2 - factor": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Q"}, "format": "number"}},
{"band 2 - enable": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Enable"}, "format": "norm"}},
{"band 2 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Active"}, "format": "norm"}},
{"band 2 - slope": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Slope"}, "format": "number"}},
{"band 2 - bandWidth": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 2/Octave"}, "format": "number"}},
{"band 3 - frequency": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/LPF/Frequency"}, "format": "number"}},
{"band 3 - enable": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/LPF/Enable"}, "format": "norm"}},
{"band 3 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/LPF/Active"}, "format": "norm"}},
{"band 4 - frequency": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Frequency"}, "format": "number"}},
{"band 4 - gain": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Gain"}, "format": "number"}},
{"band 4 - filter": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Type"}, "format": "string"}},
{"band 4 - factor": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Q"}, "format": "number"}},
{"band 4 - enable": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Enable"}, "format": "norm"}},
{"band 4 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Active"}, "format": "norm"}},
{"band 4 - slope": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Slope"}, "format": "number"}},
{"band 4 - bandWidth": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 4/Octave"}, "format": "number"}},
{"band 5 - frequency": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/HPF/Frequency"}, "format": "number"}},
{"band 5 - enable": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/HPF/Enable"}, "format": "norm"}},
{"band 5 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/HPF/Active"}, "format": "norm"}}]`;

var acGraphTDCParameter = `[{"band 1 - enable": { "idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/TDC/Enable"}, "format": "norm"}},
{"band 1 - gain": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/TDC/Level"}, "format": "number"}},
{"band 1 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/TDC/Active"}, "format": "number"}},
{"band 2 - enable": { "idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/ASC/Enable"}, "format": "norm"}},
{"band 2 - gain": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/ASC/Level"}, "format": "number"}},
{"band 2 - active": {"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/ASC/Active"}, "format": "norm"}}]`;

var faderParameter = '[{"idInfo":{"deviceName":"Daphne-2", "path": "/Audio/User/Gain/Level"}}]';
var textFieldParameter = '[{"idInfo": {"deviceName":"Daphne-2", "path": "/Audio/User/Gain/Level"}, "format":"norm"}]';
var buttonParameter = '[{"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var meterParameter = '[{"idInfo":{"deviceName":"Daphne-2", "path": "/Audio/User/Gain/Level"}}]';
var rotaryParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var labelParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var checkboxParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var togglebuttonParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var regionParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var ledParameter = '[{"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var radioButtonParameter = '[{"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var spinnerParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/Gain/Level"}}]';
var ipAddress = 'localhost';
var wsPort = '8095';
var restPort = '8096';
var scaleRange = '[{"label":"0", "value":"0"},{"label":"100", "value":"1"}, {"label":"25", "value":"0.25"}, {"label":"50", "value":"0.5"}, {"label":"75", "value":"0.75"},{"label":"10", "value":"0.1"},{"label":"12", "value":"0.12"},{"label":"16", "value":"0.16"},{"label":"15", "value":"0.15"}]';
var stageMeter = '[{"id":"1", "color":"#7BB728", "value":"0.2"}, {"id":"2", "color":"#5CA3DA", "value":"0.4"},{"id":"3","color":"#C0D260", "value":"0.6"},{"id":"4", "color":"#F4A04A", "value":"0.80"},{"id":"5", "color":"#F44A4A", "value":"1"}]';
var textFieldProperty = "background:violet";
var faderProperty = "--clx-fader-thumb-color:violet";
var meterProperty = "--clx-meter-background-color-off:violet";
var buttonProperty = "--clx-button-background-color-on:violet";
var checkboxProperty = "--clx-checkbox-border-color-on:green";
var togglebuttonProperty = "--clx-togglebutton-border-color-off:green";
var eqGraphProperty = "--clx-eq-graph-band-color-off:#5FEB5C";
var eqGraphDimension = "[1350, 675]";
var spinnerProperty = "--clx-spinner-arrow-color:yellow";
var eqGraphXAxis = "[0, 48000]";
var eqGraphYAxis = "[-40, 40]";
var eqGraphBand1FrequencyParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Frequency"},"format": "string"}]';
var eqGraphBand1GainParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Gain"}, "format": "string"}]';
var eqGraphBand1FactorParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Q"}, "format": "number"}]';
var eqGraphBand1BandWidthParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Octave"}, "format": "number"}]';
var eqGraphBand1SlopeParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Slope"}, "format": "number"}]';
var eqGraphBand1FilterParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Type"}, "format": "string"}]';
var eqGraphBand1EnableParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Enable"}, "format": "norm"}]';
var eqGraphBand1ActiveControl = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Active"}}]';
var eqGraphDeleteBandControl = '[{"idInfo": {"deviceName":"Daphne-1", "path": "/Audio/User/LPF/Active"}, "format": "norm"}]';
var eqGraphBandReadOnly = '{"id":"b-1", "readOnly":"true"}';
var eqGraphBandGroupInfo = '{"id":"b-1", "groupInfo":"Group 1"}';
var buttonCustomParameterControl = '[{"idInfo":{"deviceName":"page 1", "path": "page/site/web"},"format":"string"}]';
var textFieldCustomParameterControl = '[{"idInfo":{"deviceName":"page 1", "path": "page/site/web"},"format":"string"}]';
// var eqGraphMainenableParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/enable"}, "format": "norm"}]';
var acGraphBandAsEQTDC = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/PEQ/Band 1/Gain"}, "format": "string"}]';
var acGraphTDCEnableParameter = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/ASC/Enable"}, "format": "norm"}]';
var eqGraphLevelSpinnerParameterTDC = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/TDC/Level"}}]';
var eqGraphLevelSpinnerParameterASC = '[{"idInfo":{"deviceName":"Daphne-1", "path": "/Audio/User/ASC/Level"}}]';

document.onreadystatechange = function (e) {

    if (document.readyState === 'complete') {

        const textFieldParameter = document.getElementById('textFieldParameter');
        textFieldParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'textFieldControl'));

        const faderParameter = document.getElementById('faderParameter');
        faderParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'faderControl'));

        const meterParameter = document.getElementById('meterParameter');
        meterParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'meterControl'));

        const buttonParameterUp = document.getElementById('buttonParameter');
        buttonParameterUp.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'buttonControlUp'));

        const buttonParameterDown = document.getElementById('buttonParameter');
        buttonParameterDown.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'buttonControlDown'));

        const buttonParameterToggle = document.getElementById('buttonParameter');
        buttonParameterToggle.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'buttonControlToggle'));

        const buttonParameterMomentary = document.getElementById('buttonParameter');
        buttonParameterMomentary.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'buttonControlMomentary'));

        const buttonParameterLatching = document.getElementById('buttonParameter');
        buttonParameterLatching.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'buttonControlLatching'));

        const rotaryParameter = document.getElementById('rotaryParameter');
        rotaryParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'rotaryControl'));

        const regionParameter = document.getElementById('regionParameter');
        regionParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'regionControl'));

        const ledParameter = document.getElementById('ledParameter');
        ledParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'ledControl'));

        const spinnerParameter = document.getElementById('spinnerParameter');
        spinnerParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'spinnerControl'));

        const eqGraphParameter = document.getElementById('eqGraphParameter');
        eqGraphParameter.addEventListener("changeValue", event => onChangeValueEvent(event, 'parameters', 'eqGraphControl'));

        const buttonServer = document.getElementById('buttonServer');
        buttonServer.addEventListener("click", event => setApiAddress());

        const buttonSignalRTest = document.getElementById('buttonSignalRTest');
        buttonSignalRTest.addEventListener("click", event => startSigRTest());

        const scalePosition = document.getElementById('scalePosition');
        scalePosition.addEventListener("change", event => onChangeScale());

        const faderOperationMode = document.getElementById('faderOperationMode');
        faderOperationMode.addEventListener("change", event => onFaderOperationMode(event));

        const scaleRange = document.getElementById('buttonScaleRange');
        scaleRange.addEventListener("click", event => setScaleRange());

        const stageMeter = document.getElementById('buttonStageMeter');
        stageMeter.addEventListener("click", event => setStageMeter());

        const tickValue = document.getElementById('tickValue');
        tickValue.addEventListener("change", event => onTickValue(event));

        const checkShowScale = document.getElementById('checkShowScale');
        checkShowScale.addEventListener("click", event => setShowScale());

        const checkSteppedMeter = document.getElementById('checkSteppedMeter');
        checkSteppedMeter.addEventListener("click", event => setStepped());

        const stepsMeter = document.getElementById('stepsMeter');
        stepsMeter.addEventListener("change", event => onStepsMeter(event));

        const thumbRadius = document.getElementById('thumbRadius');
        thumbRadius.addEventListener("change", event => onThumbRadius(event));

        const gapMeter = document.getElementById('gapMeter');
        gapMeter.addEventListener("change", event => onGapMeter(event));

        const textFieldProperty = document.getElementById('textFieldProperty');
        textFieldProperty.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'textFieldControl'));

        const faderProperty = document.getElementById('faderProperty');
        faderProperty.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'faderControl'));

        const buttonPropertyUp = document.getElementById('buttonProperty');
        buttonPropertyUp.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'buttonControlUp'));

        const buttonPropertyDown = document.getElementById('buttonProperty');
        buttonPropertyDown.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'buttonControlDown'));

        const buttonPropertyToggle = document.getElementById('buttonProperty');
        buttonPropertyToggle.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'buttonControlToggle'));

        const buttonPropertyMomentary = document.getElementById('buttonProperty');
        buttonPropertyMomentary.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'buttonControlMomentary'));

        const buttonPropertyLatching = document.getElementById('buttonProperty');
        buttonPropertyLatching.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'buttonControlLatching'));

        const buttonControlStateEnable = document.getElementById('buttonControlStateEnable');
        buttonControlStateEnable.addEventListener("click", event => {
            document.getElementById('buttonControl').setAttribute('state-enable', !event.currentTarget.checked);
        });

        const checkboxProperty = document.getElementById('checkboxProperty');
        checkboxProperty.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'checkboxControl'));

        const togglebuttonProperty = document.getElementById('togglebuttonProperty');
        togglebuttonProperty.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'togglebuttonControl'));

        const eqGraphProperty = document.getElementById('eqGraphProperty');
        eqGraphProperty.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'eqGraphControl'));

        const eqGraphDimension = document.getElementById('eqGraphDimension');
        eqGraphDimension.addEventListener("changeValue", event => onChangeValueEvent(event, 'dimensions', 'eqGraphControl'));

        const eqGraphXAxis = document.getElementById('eqGraphXAxis');
        eqGraphXAxis.addEventListener("changeValue", event => onChangeValueEvent(event, 'x-axis', 'eqGraphControl'));

        const eqGraphYAxis = document.getElementById('eqGraphYAxis');
        eqGraphYAxis.addEventListener("changeValue", event => onChangeValueEvent(event, 'y-axis', 'eqGraphControl'));

        const eqGraphBandReadOnly = document.getElementById('eqGraphBandReadOnly');
        eqGraphBandReadOnly.addEventListener("changeValue", event => onChangeValueEvent(event, 'band-read-only', 'eqGraphControl'));

        const acGraphReadOnly = document.getElementById('acReadOnly');
        acGraphReadOnly.addEventListener("changeValue", event => onChangeValueEvent(event, 'band-read-only', 'acControl'));

        const eqGraphBandGroupInfo = document.getElementById('eqGraphBandGroupInfo');
        eqGraphBandGroupInfo.addEventListener("changeValue", event => onChangeValueEvent(event, 'band-group', 'eqGraphControl'));

        const bandLabel = document.getElementById('bandLabel');
        bandLabel.addEventListener("change", event => onChangeBandLabel());

        const filterType = document.getElementById('filterType');
        filterType.addEventListener("change", event => onChangeFilterType());

        const sampleRate = document.getElementById('sampleRate');
        sampleRate.addEventListener("change", event => onChangeSampleRate());

        const bandsValue = document.getElementById('bandsValue');
        bandsValue.addEventListener("change", event => onBandsValue(event));

        const bandseqValue = document.getElementById('eqGraphControl');
        bandseqValue.addEventListener("createBandFilter", event => { console.log(event) });

        const checkAllowDelete = document.getElementById('checkAllowDelete');
        checkAllowDelete.addEventListener("click", event => setCheckboxValue('checkAllowDelete', 'allow-delete', 'eqGraphControl'));

        const checkShowFilter = document.getElementById('checkShowFilter');
        checkShowFilter.addEventListener("click", event => setCheckboxValue('checkShowFilter', 'show-filter', 'eqGraphControl'));

        const checkShowTitle = document.getElementById('checkShowTitle');
        checkShowTitle.addEventListener("click", event => setCheckboxValue('checkShowTitle', 'show-title', 'eqGraphControl'));

        const checkShowHeader = document.getElementById('checkShowHeader');
        checkShowHeader.addEventListener("click", event => setCheckboxValue('checkShowHeader', 'show-header', 'eqGraphControl'));

        const checkEnableSelection = document.getElementById('checkEnableSelection');
        checkEnableSelection.addEventListener("click", event => setCheckboxValue('checkEnableSelection', 'enable-selection', 'eqGraphControl'));

        const spinnerPropertyEnter = document.getElementById('spinnerProperty');
        spinnerPropertyEnter.addEventListener("changeValue", event => onChangeValueEvent(event, 'properties', 'spinnerControl'));

        const checkbox1 = document.getElementById('checkbox1');
        checkbox1.addEventListener("change", e => console.log(e.target.checked));

        const checkbox2 = document.getElementById('checkbox2');
        checkbox2.addEventListener("change", e => console.log(e.target.checked));

        loadCustomParameter();

    }

};

window.onload = function () {

    document.getElementById('ipAddress').setAttribute("value", ipAddress);
    document.getElementById('wsPort').setAttribute("value", wsPort);
    document.getElementById('restPort').setAttribute("value", restPort);
    document.getElementById('faderParameter').setAttribute("value", faderParameter);
    document.getElementById('textFieldParameter').setAttribute("value", textFieldParameter);
    document.getElementById('buttonParameter').setAttribute("value", buttonParameter);
    document.getElementById('meterParameter').setAttribute("value", meterParameter);
    document.getElementById('rotaryParameter').setAttribute("value", rotaryParameter);
    document.getElementById('regionParameter').setAttribute("value", regionParameter);
    document.getElementById('ledParameter').setAttribute("value", ledParameter);
    document.getElementById('eqGraphParameter').setAttribute("value", eqGraphParameter);
    document.getElementById('spinnerParameter').setAttribute("value", spinnerParameter);
    document.getElementById('textFieldProperty').setAttribute("value", textFieldProperty);
    document.getElementById('faderProperty').setAttribute("value", faderProperty);
    document.getElementById('buttonProperty').setAttribute("value", buttonProperty);
    document.getElementById('checkboxProperty').setAttribute("value", checkboxProperty);
    document.getElementById('togglebuttonProperty').setAttribute("value", togglebuttonProperty);
    document.getElementById('eqGraphProperty').setAttribute("value", eqGraphProperty);
    document.getElementById('eqGraphDimension').setAttribute("value", eqGraphDimension);
    document.getElementById('eqGraphXAxis').setAttribute("value", eqGraphXAxis);
    document.getElementById('eqGraphYAxis').setAttribute("value", eqGraphYAxis);
    document.getElementById('eqGraphBandReadOnly').setAttribute("value", eqGraphBandReadOnly);
    document.getElementById('acReadOnly').setAttribute("value", eqGraphBandReadOnly);
    document.getElementById('eqGraphBandGroupInfo').setAttribute("value", eqGraphBandGroupInfo);

    document.getElementById('spinnerProperty').setAttribute("value", spinnerProperty);
    document.getElementById('scaleRange').value = scaleRange;
    document.getElementById('stageMeter').value = stageMeter;
    document.getElementById('buttonCustomParameterControl').setAttribute("parameters", buttonCustomParameterControl);
    document.getElementById('buttonCustomParameterPage1Control').setAttribute("parameters", buttonCustomParameterControl);
    document.getElementById('buttonCustomParameterPage2Control').setAttribute("parameters", buttonCustomParameterControl);
    document.getElementById('textFieldCustomParameterControl').setAttribute("parameters", textFieldCustomParameterControl);

    document.getElementById('faderControl').setAttribute("parameters", faderParameter);
    document.getElementById('meterControl').setAttribute("parameters", meterParameter);

    document.getElementById('buttonControlUp').setAttribute("parameters", buttonParameter);
    document.getElementById('buttonControlDown').setAttribute("parameters", buttonParameter);
    document.getElementById('buttonControlToggle').setAttribute("parameters", buttonParameter);
    document.getElementById('buttonControlMomentary').setAttribute("parameters", buttonParameter);
    document.getElementById('buttonControlLatching').setAttribute("parameters", buttonParameter);

    document.getElementById('textFieldControl').setAttribute("parameters", textFieldParameter);
    document.getElementById('spinnerControl').setAttribute("parameters", spinnerParameter);
    document.getElementById('ledControl').setAttribute("parameters", ledParameter);
    document.getElementById('radioButtonOnControl').setAttribute("parameters", radioButtonParameter);
    document.getElementById('radioButtonOffControl').setAttribute("parameters", radioButtonParameter);
    document.getElementById('rotaryControl').setAttribute("parameters", rotaryParameter);
    document.getElementById('labelControl').setAttribute("parameters", labelParameter);
    document.getElementById('checkboxControl').setAttribute("parameters", checkboxParameter);
    document.getElementById('togglebuttonControl').setAttribute("parameters", togglebuttonParameter);
    document.getElementById('regionControl').setAttribute("parameters", regionParameter);

    document.getElementById('eqGraphBand1FrequencyControl').setAttribute("parameters", eqGraphBand1FrequencyParameter);
    document.getElementById('eqGraphBand1GainControl').setAttribute("parameters", eqGraphBand1GainParameter);
    document.getElementById('eqGraphBand1FactorControl').setAttribute("parameters", eqGraphBand1FactorParameter);
    document.getElementById('eqGraphBand1BandWidthControl').setAttribute("parameters", eqGraphBand1BandWidthParameter);
    document.getElementById('eqGraphBand1SlopeControl').setAttribute("parameters", eqGraphBand1SlopeParameter);
    document.getElementById('eqGraphBand1FilterControl').setAttribute("parameters", eqGraphBand1FilterParameter);
    document.getElementById('eqGraphBand1ActiveControl').setAttribute("parameters", eqGraphBand1ActiveControl);
    document.getElementById('eqGraphBand1EnableControl').setAttribute("parameters", eqGraphBand1EnableParameter);
    document.getElementById('eqGraphDeleteBandControl').setAttribute("parameters", eqGraphDeleteBandControl);
    // this property has been removed from eq-graph document.getElementById('eqGraphMainenableControl').setAttribute("parameters", eqGraphMainenableParameter);
    document.getElementById('eqGraphControl').setAttribute("parameters", eqGraphParameter);

    document.getElementById('browserInfo').innerHTML = getBrowserVersion();
    document.getElementById('acControl').setAttribute('parameters', acGraphTDCParameter)
    document.getElementById('acGraphBandAsTDC').setAttribute("parameters", eqGraphLevelSpinnerParameterTDC);
    document.getElementById('acGraphBandAsASC').setAttribute("parameters", eqGraphLevelSpinnerParameterASC);
    document.getElementById('enableACTDC').setAttribute("parameters", acGraphTDCEnableParameter);

    const btnElement = document.getElementById('configBtn');
    btnElement.setProperty('any', 'Configured Button', { 'key': 'text', 'elementType': 'attribute' });
    console.log(btnElement.getProperty(null, { 'key': 'text', 'elementType': 'attribute' }));
    btnElement.setProperty('any', 'teal', { 'key': '--clx-button-background-color-on', 'elementType': 'css' });
    console.log(btnElement.getProperty(null, { 'key': '--clx-button-background-color-on', 'elementType': 'css' }));

};

function loadCustomParameter() {

    let controlApi = window.cloudWorxParameterInstance;
    controlApi.createCustomParameter({ deviceName: "page 1", path: "page/site/web" }, "string", "Page1");

}

function setApiAddress() {

    ipAddress = document.getElementById('ipAddress').value;
    wsPort = document.getElementById('wsPort').value;
    restPort = document.getElementById('restPort').value;

    if (ipAddress != "") {

        var controlApi = window.cloudWorxControlApiInstance;

        if (wsPort.includes('/') || restPort.includes('/')) {

            controlApi.setServerAddress(ipAddress, wsPort, restPort, 1, 1);

        } else {

            controlApi.setServerAddress(ipAddress, wsPort, restPort, 0, 0);

        }

    }

}

function onChangeValueEvent(event, attribute, controlName) {

    var value = event.currentTarget.value;
    document.getElementById(controlName).setAttribute(attribute, value);

}

function onChangeScale() {

    var position = document.getElementById("scalePosition").value;

    if (position != 0) {

        document.getElementById('faderControl').setAttribute("scale-position", position);
        document.getElementById('meterControl').setAttribute("scale-position", position);

    }

}

function setScaleRange() {

    var range = document.getElementById("scaleRange").value;

    if (range != "") {

        //document.getElementById('faderControl').setAttribute("properties", '{"main-color": "black"}');
        document.getElementById('faderControl').setAttribute("scale-range", range);
        document.getElementById('meterControl').setAttribute("scale-range", range);
        document.getElementById('rotaryControl').setAttribute("scale-range", range);

    } else {

        document.getElementById('faderControl').removeAttribute("scale-range");
        document.getElementById('meterControl').removeAttribute("scale-range");
        document.getElementById('rotaryControl').removeAttribute("scale-range");

    }

}

function setStageMeter() {

    var stage = document.getElementById("stageMeter").value;

    if (stage != "") {
        document.getElementById('meterControl').setAttribute("stages", stage);
    }

}

function setShowScale() {

    var checked = document.getElementById("checkShowScale").checked;
    document.getElementById('faderControl').setAttribute("show-scale", checked);
    document.getElementById('meterControl').setAttribute("show-scale", checked);
    document.getElementById('rotaryControl').setAttribute("show-scale", checked);

}

function setStepped() {

    var checked = document.getElementById("checkSteppedMeter").checked;
    document.getElementById('meterControl').setAttribute("stepped", checked);

}

function onStepsMeter(event) {

    var value = event.currentTarget.value;

    if (value != "") {
        document.getElementById('meterControl').setAttribute("steps", value);
    }

}

function onFaderOperationMode(event) {

    var value = event.currentTarget.value;

    if (value != "") {
        document.getElementById('faderControl').setAttribute("operation-mode", value);
    }

}

function onGapMeter(event) {

    var value = event.currentTarget.value;

    if (value != "") {
        document.getElementById('meterControl').setAttribute("gap", value);
    }

}

function onChangeBandLabel() {

    var bandLabel = document.getElementById("bandLabel").value;

    if (bandLabel != 0) {
        document.getElementById('eqGraphControl').setAttribute("band-label", bandLabel);
    }

}

function onChangeFilterType() {

    var filterType = document.getElementById("filterType").value;

    if (filterType != 0) {
        document.getElementById('eqGraphControl').setAttribute("filter-type", filterType);
    }

}

function onChangeSampleRate() {

    var sampleRate = document.getElementById("sampleRate").value;

    if (sampleRate != 0) {
        document.getElementById('eqGraphControl').setAttribute("sample-rate", sampleRate);
    }

}

function onBandsValue(event) {

    var value = event.currentTarget.value;

    if (value != "") {
        document.getElementById('eqGraphControl').setAttribute("bands", value);
    }

}

function onThumbRadius(event) {

    var value = event.currentTarget.value;

    if (value != "") {
        document.getElementById('faderControl').setAttribute("thumb-radius", value);
    }

}

function onTickValue(event) {

    var value = event.currentTarget.value;

    if (value != "") {

        document.getElementById('faderControl').setAttribute("tick-marks", value);
        document.getElementById('meterControl').setAttribute("tick-marks", value);
        document.getElementById('rotaryControl').setAttribute("tick-marks", value);

    }

}

function startSigRTest() {

    let controlApi = window.cloudWorxControlApiInstance;

    controlApi.setServerAddress("https://devapi.harmanavatar.com/cas",
        "",
        "",
        1,
        1,
        {
            IsProdDeployment: true,
            XModelVersion: 6,
            gatewayId: "0278dbae-caa5-4cd2-8774-949382df5b10",
            //gatewayId: "b8ad2567-fde4-4741-8cd7-ddacc569bd82", // Naveen's Computer
            projectId: "7493c253-f690-44e8-9946-34ab44e436a4",
            //projectId: "73ca64ca-6ff8-4b79-a1ba-abb436a8471f", // Naveen's Computer
            tenantId: "8a5bb02d-50f4-52ef-b25a-d8557545beb0",
        });

}

function setCheckboxValue(controlName, attribute, webComponentControl) {

    var checked = document.getElementById(controlName).checked;
    document.getElementById(webComponentControl).setAttribute(attribute, checked);

}

function getBrowserVersion(){

    var userAgent= navigator.userAgent, tem,

        matchTest= userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if(/trident/i.test(matchTest[1])){

        tem=  /\brv[ :]+(\d+)/g.exec(userAgent) || [];

        return 'IE '+(tem[1] || '');

    }

    if(matchTest[1]=== 'Chrome'){

        tem= userAgent.match(/\b(OPR|Edge)\/(\d+)/);

        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');

    }

    matchTest= matchTest[2]? [matchTest[1], matchTest[2]]: [navigator.appName, navigator.appVersion, '-?'];

    if((tem= userAgent.match(/version\/(\d+)/i))!= null) matchTest.splice(1, 1, tem[1]);

    return matchTest.join(' ');

}
