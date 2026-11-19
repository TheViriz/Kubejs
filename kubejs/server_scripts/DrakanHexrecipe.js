ServerEvents.recipes(event => {
    function safe(name, fn) {
        try { fn() } catch (e) { console.error('FAIL ' + name + ': ' + e) }
    }

    event.remove({ output: 'hexcasting:slate_block' })
    event.remove({ output: 'hexcasting:spellbook' })
    event.remove({ output: 'hexcasting:focus' })
    event.remove({ output: 'hexcasting:artifact' })
    event.remove({ output: 'hexcasting:cypher' })
    event.remove({ output: 'hexcasting:trinket' })
    event.remove({ output: 'hexcasting:lens' })
    event.remove({ output: 'hexcasting:slate' })

    safe('slate', () => event.shaped('hexcasting:slate_block', [
        'OOO',
        'OKO',
        'OOO'
    ], {
        O: 'gtceu:lv_machine_casing',
        K: 'gtceu:pure_amethyst_dust'
    }))
    safe('slate', () =>  event.stonecutting('2x hexcasting:slate', 'hexcasting:slate_block'))

    safe('spellbook', () => event.shaped('hexcasting:spellbook', [
        'CBA',
        'CDA',
        'CBA'
    ], {
        A: 'hexcasting:charged_amethyst',
        B: 'minecraft:writable_book',
        C: 'minecraft:gold_nugget',
        D: 'hexcasting:focus'
    }))

    safe('creative_unlocker', () => event.shaped('hexcasting:creative_unlocker', [
        'KIK',
        'ILI',
        'KIK'
    ], {
        L: 'gtceu:wetware_processor_mainframe',
        I: '#gtceu:batteries/uhv',
        K: '#hexcasting:quenched_allay_blocks'
    }))

    safe('focus', () => event.shaped('hexcasting:focus', [
        ' L ',
        'IGI',
        ' L '
    ], {
        L: 'gtceu:sticky_resin',
        I: 'gtceu:bronze_ring',
        G: 'hexcasting:charged_amethyst'
    }))

    safe('artifact', () => event.shaped('hexcasting:artifact', [
        ' I ',
        'KHK',
        ' G '
    ], {
        G: 'hexcasting:edified_button',
        H: 'hexcasting:quenched_allay_shard',
        K: 'create:golden_sheet',
        I: 'hexcasting:trinket'
    }))

    safe('trinket', () => event.shaped('hexcasting:trinket', [
        'GLG',
        'LHL',
        'KLG'
    ], {
        G: 'minecraft:iron_ingot',
        L: 'hexcasting:amethyst_dust',
        K: 'hexcasting:edified_button',
        H: 'hexcasting:charged_amethyst'
    }))

    safe('cypher', () => event.shaped('hexcasting:cypher', [
        'HJ',
        'Y '
    ], {
        H: 'hexcasting:charged_amethyst',
        J: 'gtceu:copper_ring',
        Y: 'hexcasting:edified_button'
    }))

})