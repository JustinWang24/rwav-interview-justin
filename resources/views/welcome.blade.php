<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div id="app" class="rwav-app-flex">
            <top>RWAV</top>

            <actions-bar :visible="!hasPosts" :in-action="inAction" v-on:btn-clicked="onActionsBarBtnClicked"></actions-bar>

            <posts :visible="hasPosts" :posts="posts" v-on:post-clicked="onPostClicked"></posts>

        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
