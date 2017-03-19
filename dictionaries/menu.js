const ru = {
    menu_main_left: [
        {
            title: 'Оборудование', path: '',
            menu: [
                { title: 'Мониторинг коррозии', path: '/equipment/corrosion-monitoring/' },
                { title: 'Очистные устройства для трубопроводов', path: '/equipment/tube-cleaning/' },
                { title: 'Вентиляция', path: '/equipment/ventilation/' },
                { title: 'Клапаны', path: '/equipment/valve/' },
                { title: 'Газодувки', path: '/equipment/blower/' },
                { title: 'Огнезащита', path: '/equipment/fire-protection/' },
                { title: 'Зип', path: '/equipment/zip/' },
                { title: 'Испытательные стенды', path: '/equipment/test-stand/' },
                { title: 'Насосы', path: '/equipment/nko/pump/' },
                { title: 'Компрессоры', path: '/equipment/nko/compressor/' },
                { title: 'Мультифазные насосные станции', path: '/equipment/nko/mps/' },
            ]
        },
        { title: 'Наши заказчики', path: '/clients/' },
    ],

    menu_main_right: [
        { title: 'Пресса о нас', path: '/press/' },
        { title: 'Контакты', path: '/contacts/' }
    ],
}

const en = {
    menu_main_left: [
        {
            title: 'Equipment', path: '',
            menu: [
                { title: 'Corrosion monitoring', path: '/equipment/corrosion-monitoring/' },
                { title: 'Pipelines treating facility', path: '/equipment/tube-cleaning/' },
                { title: 'Ventilation', path: '/equipment/ventilation/' },
                { title: 'Valves', path: '/equipment/valve/' },
                { title: 'Gas blowers', path: '/equipment/blower/' },
                { title: 'Fire protection', path: '/equipment/fire-protection/' },
                { title: 'Spare parts', path: '/equipment/zip/' },
                { title: 'Test facility', path: '/equipment/test-stand/' },
                { title: 'Pumps', path: '/equipment/nko/pump/' },
                { title: 'Compressors', path: '/equipment/nko/compressor/' },
                { title: 'Multiphase pumping stations', path: '/equipment/nko/mps/' },
            ]
        },
        { title: 'Our customers', path: '/clients/' },
    ],

    menu_main_right: [
        { title: 'Media about us', path: '/press/' },
        { title: 'Contacts', path: '/contacts/' }
    ],
}

export default { ru, en }