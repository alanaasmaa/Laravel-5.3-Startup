<!DOCTYPE html>
<html lang="{{ config('app.lang', 'en') }}">
    <head>
        @include('layouts.app.meta') 
        <title>{{ config('app.name', 'Laravel') }} - @yield('title')</title>
        @include('layouts.app.css') 
        @yield('styles')
        @include('layouts.app.shim')
        @include('layouts.app.scripts_top')
        @yield('scripts_top')
    </head>
    <body>
        @include('layouts.app.navbar')
        @include('errors.list') 
        @yield('content')
        @include('layouts.app.footer') 
        @include('layouts.app.scripts_bottom')
        @yield('scripts_bottom')
    </body>
</html>