﻿(function () { 
    'use strict';
    angular.module('sidenav.landing').run(['Menus',
        function (Menus) {
            // Add the sidenav items
            Menus.addMenuAdminItem('sidenav', {
                title: 'Business',
                state: 'home.business',
                icon: 'dashboard',
                roles: ['*']
            });
            Menus.addMenuAdminItem('sidenav', {
                title: 'Help',
                state: 'home.help',
                icon: 'dashboard',
                roles: ['*']
            });
            Menus.addMenuAdminItem('sidenav', {
                title: 'Settings',
                state: 'home.settings',
                icon: 'dashboard',
                roles: ['*']
            });
            
            //Add the admin panel items
            Menus.addMenuAdminItem('sidenav', {
                title: 'Admin Panel 1',
                icon: 'dashboard',
                roles: ['admin']
            });
            Menus.addMenuAdminItem('sidenav', {
                title: 'Admin Panel 2',
                icon: 'dashboard',
                roles: ['admin']
            });
        }
    ]);
})();