<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="shortcut icon" href="{{ asset('images/favicon-32x32.png') }}">
        <title>{{ $title ?? '' }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
       
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <style>
          
        </style>
    
    </head>
    <body>
        
    @include('partials.logout')
    
    @include('partials.navigation')



    @yield('content')



    </body>
</html>
{{--partials logout has been copied from app.blade, also new routes for prefix admi--}}
