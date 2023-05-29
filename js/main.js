var com = {
    'iphon': 1000,
    'samsung': 700,
    'redmi': 200,
    'oppo': 550
};

function formatPrice(price) {
    if (typeof price === 'number') {
    var formattedPrice = "$" + price.toLocaleString(undefined, { minimumFractionDigits: 2 });
    return formattedPrice;
    }
    return price;
}

$(document).on("change", ".raw select#produit", function() {
    var selectedProduct = $(this).val();
    var price = com[selectedProduct];
    var formattedPrice = formatPrice(price);
    $(this).siblings("input#prix").val(formattedPrice);
});

$(document).on("input", ".raw input#cantity", function() {
    var cantity = $(this).val();
    var price = parseFloat($(this).siblings("input#prix").val().replace(/[^0-9.-]+/g, ""));
    var result = cantity * price;
    var formattedResult = "$" + result.toLocaleString(undefined, { minimumFractionDigits: 2 });
    $(this).siblings("h3").text(formattedResult);
});

$(document).on("click", "#add", function() {
    var $raw = $(".raw").last().clone(true);
    $raw.find("select#produit").val("");
    $raw.find("input#prix").val("");
    $raw.find("input#cantity").val("");
    $raw.appendTo(".h5");
});

$(document).on("click", "#remove", function() {
    var $parentRaw = $(this).parent();
    if ($(".raw").length === 1) {
    $(this).css("background-color", "#777");
    return;
    }
    $parentRaw.remove();
});