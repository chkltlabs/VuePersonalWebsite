<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Erik V Gratz</title>

    <!-- Vuetify CSS -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <link href="{{ asset('/css/app.css') }}">
</head>
<body>
<div id="app" class="whole-app-class">
    <app></app>
</div>

<<<<<<< HEAD
<script src="{{ asset('public/js/app.js') }}"></script>
=======
<script src="{{ asset('/js/app.js') }}"></script>
>>>>>>> develop
</body>
</html>
