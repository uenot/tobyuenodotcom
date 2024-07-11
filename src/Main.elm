module Main exposing (main)

import Browser
import List
import Element exposing (..)
import Element.Input as Input
import Element.Font as Font
import Html exposing (Html)
import Content exposing (homeContent, aboutContent)
import Element.Background as Background

main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }

type alias Model =
    { page : Page
    }

type Page = Home | About
-- AboutSite | ReadingList | Github | Spotify

pages : List Page
pages = [Home, About]

pageToButton: Page -> Element Msg
pageToButton page = Input.button [] {onPress = Just <| SwitchPage page, label = text <| pageToText page}

pageToText : Page -> String
pageToText page = case page of
    Home -> "Home"
    About -> "About"

init : Model
init = {page = Home}

type Msg = SwitchPage Page

update : Msg -> Model -> Model
update msg _ =
  case msg of
    SwitchPage page ->
      Model page

viewHome : List (Attribute Msg) -> Element Msg
viewHome attrs =
    column attrs [
        paragraph [Font.size 32, padding 20] [text "Hi, I'm Toby Ueno! Welcome to my website!"]
        , row [padding 10, spacing 10] [
            image [width <| fillPortion 1] {src="../static/headshot.jpg", description="headshot"}
            , paragraph [width <| fillPortion 2, padding 25] [text homeContent]
        ]
    ]

stagger : Int -> String -> Element Msg
stagger i s =
    let 
        isLeft = (modBy 2 (i+1) == 1) 
        spacer = el [width <| fillPortion 1] none
    in
    row [] [
        (if isLeft then none else spacer)
        , paragraph [width <| fillPortion 3] [text s]
        , (if isLeft then spacer else none)
    ]

viewAbout : List (Attribute Msg) -> Element Msg
viewAbout attrs =
    column attrs [
        paragraph [Font.bold, Font.size 32] [text "About Me"],
        column [paddingXY 0 10, spacingXY 0 40]
            <| List.indexedMap stagger aboutContent
    ]

pageToView : List (Attribute Msg) -> Page ->  Element Msg
pageToView attrs page = case page of
    Home -> viewHome attrs
    About -> viewAbout attrs

header : Element Msg
header = row [width fill, Background.color (rgb255 130 169 232)] [
        paragraph [Font.bold, Font.size 24, padding 20] [text "Toby Ueno"]
        , row [centerX, spacing 15, padding 20] <| List.map pageToButton pages
    ]

footerFont : List (Attribute Msg)
footerFont = [Font.size 16, Font.color (rgb 0.6 0.6 0.6)]

footer : Element Msg
footer = el [width fill, Background.color (rgb 0.3 0.3 0.3)] 
    <| row [centerX 
        , paddingXY 0 25
        , spacing 10] [
        paragraph footerFont [
            link [] {url="mailto:tobyueno@gmail.com",
                label=text "tobyueno@gmail.com"}
            ]
        , paragraph footerFont [text " | "]
        , paragraph footerFont [
            newTabLink [] {url="https://github.com/uenot", label=text "GitHub"}
        ]
        , paragraph footerFont [text " | "]
        , paragraph footerFont [
            newTabLink [] {url="https://www.linkedin.com/in/toby-ueno/", label=text "LinkedIn"}
        ]
    ]


-- FONT IMPORT SNIPPET (throw in header of HTML):
-- <link rel="preconnect" href="https://fonts.googleapis.com">
-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
-- <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
-- 	rel="stylesheet">
    
view : Model -> Html Msg
view model = 
  layout [Font.family [Font.typeface "Ubuntu Sans Mono", Font.typeface "Monaco", Font.serif]] (
    column [width fill, height fill] [
        header
        , el [height fill] <| pageToView [padding 20, spacing 10] model.page
        , footer
    ]
  )