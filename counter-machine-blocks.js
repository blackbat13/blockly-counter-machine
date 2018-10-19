'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

var clrJson = {
    "type": "clr",
    "message0": "CLR %1",
    "args0": [
        {
            "type": "field_number",
            "name": "index",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Clear register",
    "helpUrl": ""
};

var zJson = {
    "type": "z",
    "message0": "Z %1",
    "args0": [
        {
            "type": "field_number",
            "name": "index",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Clear register",
    "helpUrl": ""
};

var incJson = {
    "type": "inc",
    "lastDummyAlign0": "CENTRE",
    "message0": "INC %1",
    "args0": [
        {
            "type": "field_number",
            "name": "index",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Increment the contents of register",
    "helpUrl": ""
};

var sJson = {
    "type": "s",
    "lastDummyAlign0": "CENTRE",
    "message0": "S %1",
    "args0": [
        {
            "type": "field_number",
            "name": "index",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Increment the contents of register",
    "helpUrl": ""
};

var decJson = {
    "type": "dec",
    "message0": "DEC %1",
    "args0": [
        {
            "type": "field_number",
            "name": "index",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Decrement the contents of register",
    "helpUrl": ""
};

var cpyJson = {
    "type": "cpy",
    "message0": "CPY %1 %2",
    "args0": [
        {
            "type": "field_number",
            "name": "index1",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "index2",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Copy the contents of first register to second one",
    "helpUrl": ""
};

var tJson = {
    "type": "t",
    "message0": "T %1 %2",
    "args0": [
        {
            "type": "field_number",
            "name": "index1",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "index2",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Copy the contents of first register to second one",
    "helpUrl": ""
};

var jzJson = {
    "type": "jz",
    "message0": "JZ %1 %2",
    "args0": [
        {
            "type": "field_number",
            "name": "index",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "instruction",
            "value": 1,
            "min": 1,
            "precision": 1
        }
    ],
    "colour": 230,
    "tooltip": "If register contains zero then jumps to instruction",
    "helpUrl": ""
};

var jeJson = {
    "type": "je",
    "message0": "JE register1: %1 register2: %2 instruction: %3",
    "args0": [
        {
            "type": "field_number",
            "name": "index1",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "index2",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "instruction",
            "value": 0,
            "min": 0,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "If the contents of first register equals the contents of second register then jump to instruction",
    "helpUrl": ""
};

var iJson = {
    "type": "i",
    "message0": "I m: %1 n: %2 q: %3",
    "args0": [
        {
            "type": "field_number",
            "name": "index1",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "index2",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "field_number",
            "name": "instruction",
            "value": 0,
            "min": 0,
            "precision": 1
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "If the contents of first register equals the contents of second register then jump to instruction",
    "helpUrl": ""
};

Blockly.Blocks['clr'] = {
    init: function () {
        this.jsonInit(clrJson);
    }
};

Blockly.Blocks['z'] = {
    init: function () {
        this.jsonInit(zJson);
    }
};

Blockly.Blocks['inc'] = {
    init: function () {
        this.jsonInit(incJson);
    }
};

Blockly.Blocks['s'] = {
    init: function () {
        this.jsonInit(sJson);
    }
};

Blockly.Blocks['dec'] = {
    init: function () {
        this.jsonInit(decJson);
    }
};

Blockly.Blocks['cpy'] = {
    init: function () {
        this.jsonInit(cpyJson);
    }
};

Blockly.Blocks['t'] = {
    init: function () {
        this.jsonInit(tJson);
    }
};

Blockly.Blocks['jz'] = {
    init: function () {
        this.jsonInit(jzJson);
    }
};

Blockly.Blocks['je'] = {
    init: function () {
        this.jsonInit(jeJson);
    }
};

Blockly.Blocks['i'] = {
    init: function () {
        this.jsonInit(iJson);
    }
};

Blockly.Blocks['procedures_defnoreturn'] = {
    /**
     * Block for defining a procedure with no return value.
     * @this Blockly.Block
     */
    init: function() {
        var nameField = new Blockly.FieldTextInput(
            Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
            Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
            .appendField('Procedure')
            .appendField(nameField, 'NAME');
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.arguments_ = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
    },
    /**
     * Add or remove the statement block from this function definition.
     * @param {boolean} hasStatements True if a statement block is needed.
     * @this Blockly.Block
     */
    setStatements_: function(hasStatements) {
        if (this.hasStatements_ === hasStatements) {
            return;
        }
        if (hasStatements) {
            this.appendStatementInput('STACK')
                .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
            if (this.getInput('RETURN')) {
                this.moveInputBefore('STACK', 'RETURN');
            }
        } else {
            this.removeInput('STACK', true);
        }
        this.hasStatements_ = hasStatements;
    },
    /**
     * Update the display of parameters for this procedure definition block.
     * Display a warning if there are duplicately named parameters.
     * @private
     * @this Blockly.Block
     */
    updateParams_: function() {
        // Check for duplicated arguments.
        var badArg = false;
        var hash = {};
        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break;
            }
            hash['arg_' + this.arguments_[i].toLowerCase()] = true;
        }
        if (badArg) {
            this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
        } else {
            this.setWarningText(null);
        }
        // Merge the arguments into a human-readable list.
        var paramString = '';
        if (this.arguments_.length) {
            paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
                ' ' + this.arguments_.join(', ');
        }
        // The params field is deterministic based on the mutation,
        // no need to fire a change event.
        Blockly.Events.disable();
        try {
            this.setFieldValue(paramString, 'PARAMS');
        } finally {
            Blockly.Events.enable();
        }
    },
    /**
     * Create XML to represent the argument inputs.
     * @param {=boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function(opt_paramIds) {
        var container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));
        }
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            if (opt_paramIds && this.paramIds_) {
                parameter.setAttribute('paramId', this.paramIds_[i]);
            }
            container.appendChild(parameter);
        }

        // Save whether the statement input is visible.
        if (!this.hasStatements_) {
            container.setAttribute('statements', 'false');
        }
        return container;
    },
    /**
     * Parse XML to restore the argument inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.arguments_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));
            }
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);

        // Show or hide the statement input.
        this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock('procedures_mutatorcontainer');
        containerBlock.initSvg();

        // Check/uncheck the allow statement box.
        if (this.getInput('RETURN')) {
            containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE',
                'STATEMENTS');
        } else {
            containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
        }

        // Parameter list.
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock('procedures_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        }
        // Initialize procedure's callers with blank IDs.
        Blockly.Procedures.mutateCallers(this);
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        // Parameter list.
        this.arguments_ = [];
        this.paramIds_ = [];
        var paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection &&
                paramBlock.nextConnection.targetBlock();
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);

        // Show/hide the statement input.
        var hasStatements = containerBlock.getFieldValue('STATEMENTS');
        if (hasStatements !== null) {
            hasStatements = hasStatements == 'TRUE';
            if (this.hasStatements_ != hasStatements) {
                if (hasStatements) {
                    this.setStatements_(true);
                    // Restore the stack, if one was saved.
                    Blockly.Mutator.reconnect(this.statementConnection_, this, 'STACK');
                    this.statementConnection_ = null;
                } else {
                    // Save the stack, then disconnect it.
                    var stackConnection = this.getInput('STACK').connection;
                    this.statementConnection_ = stackConnection.targetConnection;
                    if (this.statementConnection_) {
                        var stackBlock = stackConnection.targetBlock();
                        stackBlock.unplug();
                        stackBlock.bumpNeighbours_();
                    }
                    this.setStatements_(false);
                }
            }
        }
    },
    /**
     * Return the signature of this procedure definition.
     * @return {!Array} Tuple containing three elements:
     *     - the name of the defined procedure,
     *     - a list of all its arguments,
     *     - that it DOES NOT have a return value.
     * @this Blockly.Block
     */
    getProcedureDef: function() {
        return [this.getFieldValue('NAME'), this.arguments_, false];
    },
    /**
     * Return all variables referenced by this block.
     * @return {!Array.<string>} List of variable names.
     * @this Blockly.Block
     */
    getVars: function() {
        return this.arguments_;
    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.
     * @this Blockly.Block
     */
    renameVar: function(oldName, newName) {
        var change = false;
        for (var i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true;
            }
        }
        if (change) {
            this.updateParams_();
            // Update the mutator's variables if the mutator is open.
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();
                for (var i = 0, block; block = blocks[i]; i++) {
                    if (block.type == 'procedures_mutatorarg' &&
                        Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
                        block.setFieldValue(newName, 'NAME');
                    }
                }
            }
        }
    },
    /**
     * Add custom menu options to this block's context menu.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function(options) {
        // Add option to create caller.
        var option = {enabled: true};
        var name = this.getFieldValue('NAME');
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
        var xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        for (var i = 0; i < this.arguments_.length; i++) {
            var xmlArg = goog.dom.createDom('arg');
            xmlArg.setAttribute('name', this.arguments_[i]);
            xmlMutation.appendChild(xmlArg);
        }
        var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);

        // Add options to create getters for each parameter.
        if (!this.isCollapsed()) {
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {enabled: true};
                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
                var xmlField = goog.dom.createDom('field', null, name);
                xmlField.setAttribute('name', 'VAR');
                var xmlBlock = goog.dom.createDom('block', null, xmlField);
                xmlBlock.setAttribute('type', 'variables_get');
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    },
    callType_: 'procedures_callnoreturn'
};

Blockly.Blocks['procedures_defreturn'] = null;
Blockly.Blocks['procedures_ifreturn'] = null;

Blockly.JavaScript['clr'] = function (block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine[' + number_index + '] = 0;\n';
    return code;
};

Blockly.JavaScript['z'] = function (block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine[' + number_index + '] = 0;\n';
    return code;
};

Blockly.JavaScript['inc'] = function (block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine[' + number_index + ']++;\n';
    return code;
};

Blockly.JavaScript['s'] = function (block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine[' + number_index + ']++;\n';
    return code;
};

Blockly.JavaScript['dec'] = function (block) {
    var number_index = block.getFieldValue('index');
    var code = 'machine[' + number_index + ']--;\n';
    return code;
};

Blockly.JavaScript['cpy'] = function (block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var code = 'machine[' + number_index2 + '] = machine[' + number_index1 + '];\n';
    return code;
};

Blockly.JavaScript['t'] = function (block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var code = 'machine[' + number_index2 + '] = machine[' + number_index1 + '];\n';
    return code;
};

Blockly.JavaScript['jz'] = function (block) {
    var number_index = block.getFieldValue('index');
    var number_instruction = block.getFieldValue('instruction');
    var code = 'if(machine[' + number_index + ']==0){current_instruction=' + (number_instruction - 1) + ';}\n';
    return code;
};

Blockly.JavaScript['je'] = function (block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var number_instruction = block.getFieldValue('instruction');
    var code = 'if(machine[' + number_index1 + ']==machine[' + number_index2 + ']){current_instruction=' + (number_instruction - 1) + ';}\n';
    return code;
};

Blockly.JavaScript['i'] = function (block) {
    var number_index1 = block.getFieldValue('index1');
    var number_index2 = block.getFieldValue('index2');
    var number_instruction = block.getFieldValue('instruction');
    var code = 'if(machine[' + number_index1 + ']==machine[' + number_index2 + ']){current_instruction=' + (number_instruction - 1) + ';}\n';
    return code;
};

Blockly.JavaScript['procedures_defnoreturn'] = function (block) {
    var name = block.getFieldValue('NAME').replace(/ /g, '_');
    var code = 'function ' + name + '(){';
    for(var i = 0; i < block.childBlocks_.length; ++i) {
        var childBlock = block.childBlocks_[i];
        code += Blockly.JavaScript.blockToCode(childBlock);
    }

    code += '}';
    code = code.replace(/\n/g, ' ');
    return code;
};