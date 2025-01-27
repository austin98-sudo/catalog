const games = [
    {
        "title": "Horizon: Zero Dawn",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.1LEFev1H-SVtjacfLxh75AHaJ4&pid=Api"
    },
    {
        "title": "Horizon: Forbidden West",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.P1wBKKe3MKguHiWflLa1FAHaHa&pid=Api"
    },
    {
        "title": "Assassin\u2019s Creed: Odyssey",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.JziybU7zlybZLHiDZH_DDwHaLH&pid=Api"
    },
    {
        "title": "Spiritfarer",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.dstvTO9KXUCcId7LKVIHRgHaLH&pid=Api"
    },
    {
        "title": "Bear and Breakfast",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.xeqOaTbQK51nnu4Sjgf_LAHaEK&pid=Api"
    },
    {
        "title": "Astroneer",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.zGPv_PZySZWespU6_C8AFQHaHa&pid=Api"
    },
    {
        "title": "Big Ambitions",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.M63mRKJMyA5QsQdpStrKKgHaHa&pid=Api"
    },
    {
        "title": "Before We Leave",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.eXKzk3MfSi5ToHv88y6jugHaHa&pid=Api"
    },
    {
        "title": "Borderlands",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.bkTpYmRwWR7J9L_ZmP2lmwHaLH&pid=Api"
    },
    {
        "title": "Borderlands 2",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.L6Pdz4speWTjIyi9vZJ47QHaHa&pid=Api"
    },
    {
        "title": "Borderlands 3",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.utp--c9pUzkxCy9dWDvHEgHaHa&pid=Api"
    },
    {
        "title": "Breathedge",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.272Qkj8Lw1jjZJ4zOP8z0gHaHa&pid=Api"
    },
    {
        "title": "Cloudpunk",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.OfweakT6SWFDltvn7ww5KgHaLH&pid=Api"
    },
    {
        "title": "Control",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.Ghr-C_xzar5enDXXn6zkvQHaHa&pid=Api"
    },
    {
        "title": "Nivalis",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.RWth_t-98Wfk6-cyIbRdyAHaJ4&pid=Api"
    },
    {
        "title": "Cyberpunk 2077",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.w4jdgMBAkZCjQ-0h_r-MoQHaLH&pid=Api"
    },
    {
        "title": "Dave the Diver",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.QQrfbTCrVBgCxML0O4GVsQHaHa&pid=Api"
    },
    {
        "title": "Detroit: Become Human",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.RIDdcJzEhSQNCGdwYVVT1wHaHa&pid=Api"
    },
    {
        "title": "Cult of the Lamb",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.WoBxs79B9U0uwzhVMCzAigHaJR&pid=Api"
    },
    {
        "title": "Days Gone",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.FZaZCM0s2H4MUfGAjUQO_AHaHa&pid=Api"
    },
    {
        "title": "Doom",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.YWQbJ_iEJenF_7uAXD7ADgHaLL&pid=Api"
    },
    {
        "title": "Doom Eternal",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.dKhQe6D70gaTvQk3MfY8_wHaKT&pid=Api"
    },
    {
        "title": "Dying Light",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.6Jq_G6O4FJhbH0KXy9_yLwHaLH&pid=Api"
    },
    {
        "title": "Dying Light 2",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.T2vC82Nn06KSlwNGdKuHLwHaJ4&pid=Api"
    },
    {
        "title": "Fallout 4",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.eEfdOLEOUZCYBzHd8P0oMwHaLH&pid=Api"
    },
    {
        "title": "Factorio",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.sUENAA6gB5XiOtyDRcS1SQHaHa&pid=Api"
    },
    {
        "title": "Farming Simulator 24",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.NDna4u2VK4kA6YEtgf5WrQHaDt&pid=Api"
    },
    {
        "title": "Flashing Lights",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.IPQAus8nlzsIcGic4Q1QEAHaDt&pid=Api"
    },
    {
        "title": "Game Dev Tycoon",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.NAWbLd4SXAMvtL0Nyb0dnwHaHa&pid=Api"
    },
    {
        "title": "Forza Horizon 4",
        "coverPhoto": "https://m.media-amazon.com/images/I/61vl1QBXuaL._AC_SL1000_.jpg"
    },
    {
        "title": "The Forgotten City",
        "coverPhoto": "https://www.dreadxp.com/wp-content/uploads/2021/07/The-Forgotten-City-Header.jpg"
    },
    {
        "title": "Ghost of Tsushima",
        "coverPhoto": "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"
    },
    {
        "title": "Good Company",
        "coverPhoto": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/06/Good-Company.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
    },
    {
        "title": "Graveyard Keeper",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.yT2XyqaBfSPUeP0Qa20MJgHaHa&pid=Api"
    },
    {
        "title": "Hades",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.ZsEAv6syU4T0PppgqdfO1gHaJ4&pid=Api"
    },
    {
        "title": "Hades 2",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.U0JocZkRt0GiI_YZhccV5gHaJ4&pid=Api"
    },
    {
        "title": "Heavenly Bodies",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.VO22D3XYiU43Vqlxj0GZkgHaEo&pid=Api"
    },
    {
        "title": "High on Life",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.wO2tAM5E_UG_YtlRz0ptdgHaEj&pid=Api"
    },
    {
        "title": "Hogwarts Legacy",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.5W8EFoHzPMMLlTrnZzAqWgHaHa&pid=Api"
    },
    {
        "title": "I Was a Teenage Exocolonist",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.o_UoJczn57Mj4MGZKpwnbQHaEK&pid=Api"
    },
    {
        "title": "Immortals Fenyx Rising",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.j2CSY3jUJ7L9OkcHIb2uHQHaHa&pid=Api"
    },
    {
        "title": "Infamous: Second Son",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.0NRXcb-mYukuhP1ZkXmOrwHaDt&pid=Api"
    },
    {
        "title": "It Takes Two",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.jO8Upld36RN9SpcK0Y_FawHaEK&pid=Api"
    },
    {
        "title": "The Last of Us Part 1",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.MgLv6ZMNep98yN3LKoKyowHaKQ&pid=Api"
    },
    {
        "title": "The Last of Us Part 2",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.-6pwnRC29slIQnpZCMdvtgHaJg&pid=Api"
    },
    {
        "title": "Lies of P",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.e2MCeXvE1pm8zTZ0vhHJfAHaHa&pid=Api"
    },
    {
        "title": "Life is Strange",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.jjvZSvfH2t_dIr_GXTLBBgHaHa&pid=Api"
    },
    {
        "title": "Mad Max",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.EJfDoUlRKiBpXFcocZ2hBgHaEK&pid=Api"
    },
    {
        "title": "Spider-Man",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.9HcQAvjROzQaf2Zbk0ENPQHaEK&pid=Api"
    },
    {
        "title": "Spider-Man 2",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.HvDi_tHDNQHI5NKQZRoq1QHaEK&pid=Api"
    },
    {
        "title": "Spider-Man: Miles Morales",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.oeK1NDF2NOrfb2x0qCv2kgHaEK&pid=Api"
    },
    {
        "title": "Metro 2033",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.jr84awE7Ao7WhkFWPvWmFAHaLH&pid=Api"
    },
    {
        "title": "Metro Exodus",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.fANovFrV61q3SN_aT-rwRgHaLH&pid=Api"
    },
    {
        "title": "Metro Last Light",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.3m2km0lOjBOVdWBmwUt-IQHaHa&pid=Api"
    },
    {
        "title": "Minecraft",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.pzKwPb3J9mpQXxM4zHgQjAHaLH&pid=Api"
    },
    {
        "title": "No Man\u2019s Sky",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.wFaJ6RSec1XlDCJH7bgpSwHaHa&pid=Api"
    },
    {
        "title": "Outbound",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.0RJKDSJJuVtvtWfBbx8r8gHaHa&pid=Api"
    },
    {
        "title": "Outer Wilds",
        "coverPhoto": "https://tse1.mm.bing.net/th?id=OIP.jYFXgQNC7cCPSdlNR-hMEgHaHa&pid=Api"
    },
    {
        "title": "The Outer Worlds",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.WTAQzzUGuxtc1Rs6s06sPQHaHa&pid=Api"
    },
    {
        "title": "Oxenfree",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.BIVfFoewy9HyTNGmLunOfQHaHa&pid=Api"
    },
    {
        "title": "Oxenfree 2",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.SdK9E0jSc9YWBwRxHvlJ2gHaEK&pid=Api"
    },
    {
        "title": "Papers Please",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.QFc2E8Kr9YilSsjFJOP0kgHaHa&pid=Api"
    },
    {
        "title": "Oxygen Not Included",
        "coverPhoto": "https://tse4.mm.bing.net/th?id=OIP.-uDBXtKmYCs-2Be7eb_rSQHaLH&pid=Api"
    },
    {
        "title": "Payday 2",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.hDYw8MycF6OVQTxKgZZgTgHaHa&pid=Api"
    },
    {
        "title": "Prison Architect",
        "coverPhoto": "https://tse2.mm.bing.net/th?id=OIP.yFSHGyoCF4UmphMMdy5C-gHaHa&pid=Api"
    },
    {
        "title": "Project Hospital",
        "coverPhoto": "https://tse3.mm.bing.net/th?id=OIP.dMNykLQmH9AqP_sE2XK53AHaHa&pid=Api"
    },
	{
		"title": "Checkout: Cashier Simulator",
		"coverPhoto": "https://images.igdb.com/igdb/image/upload/t_cover_big/co89t2.webp"
	},
	{
		"title": "Cuisineer",
		"coverPhoto": "https://images.igdb.com/igdb/image/upload/t_cover_big/co5dai.webp"
	}
]