function getRandomInt(min, max) {਍    爀攀琀甀爀渀 䴀愀琀栀⸀昀氀漀漀爀⠀䴀愀琀栀⸀爀愀渀搀漀洀⠀⤀ ⨀ ⠀洀愀砀 ⴀ 洀椀渀 ⬀ ㄀⤀⤀ ⬀ 洀椀渀㬀ഀ
}਍昀甀渀挀琀椀漀渀 猀栀甀昀昀氀攀䄀爀爀愀礀⠀愀爀爀愀礀⤀ 笀ഀ
    var currentIndex = array.length, temporaryValue, randomIndex;਍ഀ
    while (0 !== currentIndex) {਍        爀愀渀搀漀洀䤀渀搀攀砀 㴀 䴀愀琀栀⸀昀氀漀漀爀⠀䴀愀琀栀⸀爀愀渀搀漀洀⠀⤀ ⨀ 挀甀爀爀攀渀琀䤀渀搀攀砀⤀㬀ഀ
        currentIndex -= 1;਍        琀攀洀瀀漀爀愀爀礀嘀愀氀甀攀 㴀 愀爀爀愀礀嬀挀甀爀爀攀渀琀䤀渀搀攀砀崀㬀ഀ
        array[currentIndex] = array[randomIndex];਍        愀爀爀愀礀嬀爀愀渀搀漀洀䤀渀搀攀砀崀 㴀 琀攀洀瀀漀爀愀爀礀嘀愀氀甀攀㬀ഀ
    }਍ഀ
    return array;਍紀ഀ
var mainNow = 0;਍ഀ
function freezeMoney(balance, dollar) {਍    瘀愀爀 栀琀氀 㴀 ✀㰀猀琀礀氀攀㸀✀ ⬀ഀ
        '.freezing-info-packages {font-size: 19px;color: #444;font-weight:bold;padding-top: 12px;margin-right: -10px;text-align: center;font-family: \'Open Sans Condensed\', sans-serif;z-index: 2;position: relative;line-height: 1;}' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ挀氀漀猀攀 笀瀀漀猀椀琀椀漀渀㨀 愀戀猀漀氀甀琀攀㬀琀漀瀀㨀 ㌀㘀瀀砀㬀爀椀最栀琀㨀 ㄀㐀瀀砀㬀眀椀搀琀栀㨀 ㈀　瀀砀㬀栀攀椀最栀琀㨀 ㈀　瀀砀㬀搀椀猀瀀氀愀礀㨀 戀氀漀挀欀㬀紀✀ ⬀ഀ
        '.freezing-info:before {content: "";position: absolute;height: 198px;width: 280px;top: 0;right: 0;margin-top: -26px;}' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ椀渀昀漀笀昀漀渀琀ⴀ昀愀洀椀氀礀㨀 䄀爀椀愀氀㬀 稀ⴀ椀渀搀攀砀㨀 㤀㤀㄀　　　㬀挀漀氀漀爀㨀 戀氀愀挀欀㬀眀椀搀琀栀㨀 㐀　㌀瀀砀㬀栀攀椀最栀琀㨀 ㈀　㜀瀀砀㬀瀀漀猀椀琀椀漀渀㨀 昀椀砀攀搀㬀戀愀挀欀最爀漀甀渀搀㨀 甀爀氀⠀∀⼀挀漀洀洀漀渀⼀洀漀搀甀氀攀猀⼀洀漀搀⼀昀爀攀攀稀攀戀最⸀瀀渀最∀⤀ 渀漀ⴀ爀攀瀀攀愀琀㬀戀漀砀ⴀ猀椀稀椀渀最㨀 戀漀爀搀攀爀ⴀ戀漀砀㬀瀀愀搀搀椀渀最㨀 㔀　瀀砀 㔀　瀀砀 㐀　瀀砀㬀琀漀瀀㨀㔀㘀瀀砀㬀爀椀最栀琀㨀　㬀戀漀爀搀攀爀㨀 　㬀昀漀渀琀ⴀ猀椀稀攀㨀 ㄀　　─㬀昀漀渀琀㨀 椀渀栀攀爀椀琀㬀瘀攀爀琀椀挀愀氀ⴀ愀氀椀最渀㨀 戀愀猀攀氀椀渀攀㬀洀愀爀最椀渀ⴀ爀椀最栀琀㨀ⴀ㈀　瀀砀㬀紀✀ ⬀ഀ
        '.freezing-info-price {font-size: 25px;color: #FFF;font-weight:bold;font-family: \'Open Sans Condensed\', sans-serif;z-index: 2;position: relative;margin-top:6px;text-align: center;}' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ椀渀昀漀ⴀ琀椀琀氀攀 笀昀漀渀琀ⴀ猀椀稀攀㨀 ㈀㜀瀀砀㬀挀漀氀漀爀㨀 ⌀㈀㄀㤀㠀䌀䈀㬀昀漀渀琀ⴀ眀攀椀最栀琀㨀戀漀氀搀㬀琀攀砀琀ⴀ愀氀椀最渀㨀 挀攀渀琀攀爀㬀昀漀渀琀ⴀ昀愀洀椀氀礀㨀 尀✀伀瀀攀渀 匀愀渀猀 䌀漀渀搀攀渀猀攀搀尀✀Ⰰ 猀愀渀猀ⴀ猀攀爀椀昀㬀稀ⴀ椀渀搀攀砀㨀 ㈀㬀瀀漀猀椀琀椀漀渀㨀 爀攀氀愀琀椀瘀攀㬀琀攀砀琀ⴀ琀爀愀渀猀昀漀爀洀㨀 甀瀀瀀攀爀挀愀猀攀㬀氀椀渀攀ⴀ栀攀椀最栀琀㨀 ㄀⸀㌀㬀紀✀ ⬀ഀ
        '.freezing-close:before {-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);}' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ挀氀漀猀攀㨀愀昀琀攀爀 笀ⴀ眀攀戀欀椀琀ⴀ琀爀愀渀猀昀漀爀洀㨀 爀漀琀愀琀攀⠀ⴀ㐀㔀搀攀最⤀㬀ⴀ洀猀ⴀ琀爀愀渀猀昀漀爀洀㨀 爀漀琀愀琀攀⠀ⴀ㐀㔀搀攀最⤀㬀琀爀愀渀猀昀漀爀洀㨀 爀漀琀愀琀攀⠀ⴀ㐀㔀搀攀最⤀㬀紀✀ ⬀ഀ
        '.freezing-close:before, ' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ挀氀漀猀攀㨀愀昀琀攀爀 笀挀漀渀琀攀渀琀㨀 ∀∀㬀瀀漀猀椀琀椀漀渀㨀 愀戀猀漀氀甀琀攀㬀眀椀搀琀栀㨀 ㄀　　─㬀栀攀椀最栀琀㨀 ㈀瀀砀㬀戀愀挀欀最爀漀甀渀搀㨀 ⌀昀昀昀昀昀昀㬀紀✀ ⬀ഀ
        '@media(max-width:767px){ ' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ椀渀昀漀 笀眀椀搀琀栀㨀 ㈀㠀　瀀砀㬀栀攀椀最栀琀㨀 ㄀㐀㔀瀀砀㬀瀀愀搀搀椀渀最㨀 ㌀㔀瀀砀 ㌀　瀀砀 ㈀　瀀砀㬀琀漀瀀㨀 㔀㘀瀀砀㬀爀椀最栀琀㨀 　㬀洀愀爀最椀渀ⴀ爀椀最栀琀㨀 　瀀砀㬀戀愀挀欀最爀漀甀渀搀ⴀ猀椀稀攀㨀 挀漀渀琀愀椀渀㬀紀 ✀ ⬀ഀ
        '.freezing-info-title {font-size: 18px;} ' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ椀渀昀漀ⴀ瀀爀椀挀攀 笀昀漀渀琀ⴀ猀椀稀攀㨀 ㈀　瀀砀㬀 洀愀爀最椀渀ⴀ琀漀瀀㨀 ㌀瀀砀㬀紀✀ ⬀ഀ
        '.freezing-info-packages {font-size: 15px;padding-top: 6px;margin-right: -10px;}' +਍        ✀⸀昀爀攀攀稀椀渀最ⴀ挀氀漀猀攀 笀琀漀瀀㨀 ㈀㜀瀀砀㬀爀椀最栀琀㨀 㜀瀀砀㬀紀 ✀ ⬀ഀ
        '} ' +਍        ✀㰀⼀猀琀礀氀攀㸀✀ ⬀ഀ
        '<div class="freezing-info">' +਍        ✀㰀搀椀瘀 挀氀愀猀猀㴀∀昀爀攀攀稀椀渀最ⴀ椀渀昀漀ⴀ琀椀琀氀攀∀㸀ᰀ䬄 㜀〄㰄㸄䀄㸄㜄㠄㬄㠄 䘀㔄㴄䌄℄㰀⼀搀椀瘀㸀✀ ⬀ഀ
        '<div class="freezing-info-price">1$ = <span class="dynamic-freezing-info--price">' + dollar + ' грн.</span></div>' +਍        ✀㰀搀椀瘀 挀氀愀猀猀㴀∀昀爀攀攀稀椀渀最ⴀ椀渀昀漀ⴀ瀀愀挀欀愀最攀猀∀㸀Ḁ䄄䈄〄㬄㸄䄄䰄 㰀猀瀀愀渀 挀氀愀猀猀㴀∀瀀愀挀欀愀最攀猀ⴀ挀漀甀渀琀∀㸀✀ ⬀ 戀愀氀愀渀挀攀 ⬀ ✀㰀⼀猀瀀愀渀㸀 䠀䈄䌄㨄 㼀㸄 䄀䈄〄䀄㸄㰄䌄 㨀䌄䀄䄄䌄✄ ⬀ഀ
        '</div>' +਍        ✀㰀愀 栀爀攀昀㴀∀⌀挀氀漀猀攀∀ 挀氀愀猀猀㴀∀昀爀攀攀稀椀渀最ⴀ挀氀漀猀攀∀㸀㰀⼀愀㸀✀ ⬀ഀ
        '</div>';਍   ⼀⼀ ␀⠀栀琀洀氀⤀⸀愀瀀瀀攀渀搀吀漀⠀␀⠀✀戀漀搀礀✀⤀⤀㬀ഀ
   $('body').append(htl);਍    ␀⠀✀⸀昀爀攀攀稀椀渀最ⴀ挀氀漀猀攀✀⤀⸀漀渀⠀✀挀氀椀挀欀✀Ⰰ 昀甀渀挀琀椀漀渀 ⠀攀⤀ 笀ഀ
        $('.freezing-info').remove();਍        攀⸀瀀爀攀瘀攀渀琀䐀攀昀愀甀氀琀⠀⤀㬀ഀ
        e.stopPropagation();਍    紀⤀㬀ഀ
}