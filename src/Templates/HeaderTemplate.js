﻿kg.defaultHeaderTemplate = function () {
    return '<div data-bind="kgHeader: { value: \'__kg_selected__\' } ">' +
                '<input type="checkbox" data-bind="checked: $parent.toggleSelectAll" />' + 
           '</div>' +
           '<div data-bind="kgHeader: { value: \'Sku\' } "></div>' +
           '<div data-bind="kgHeader: { value: \'Vendor\' } "></div>' +
           '<div data-bind="kgHeader: { value: \'SeasonCode\' } "></div>' +
           '<div data-bind="kgHeader: { value: \'Mfg_Id\' } "></div>' +
           '<div data-bind="kgHeader: { value: \'UPC\' } "></div>';
};