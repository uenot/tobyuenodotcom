module Content exposing (..)
import String exposing (replace)

processMultiline : String -> String
processMultiline = replace "\n" " "

homeContent : String
homeContent = processMultiline
    """
I was born and raised in Portland, Oregon, and I'm entering my final year
as an undergraduate computer science student at Boston University.
If you want to learn more about me, check out the "About" tab above,
and feel free to get in touch via my contact info below!
    """

aboutContent : List String
aboutContent = [aboutContent1, aboutContent2, aboutContent3, aboutContent4, aboutContent5]

aboutContent1 : String
aboutContent1 = processMultiline
    """
I'm currently a fourth-year undergraduate at Boston University,
where I study computer science, lingustics, and philosophy.
I'm enrolled in the BA/MS program in computer science, which means I'll
graduate from BU with both a bachelor's and a master's degree.
I also have a second (undergraduate) major in Linguistics & Philosophy.
    """

aboutContent2 : String
aboutContent2 = processMultiline
    """
In computer science, my academic interests include programming languages,
logics, and type systems. 
Broadly, I'm interested in giving programmers the tools
to comfortably and confidently write composable, interactive programs.
I'm particularly interested in systems that let us reason about the effects of programs,
such as monads and algebraic effects.
I've also studied session-typed languages as a foundation for concurrency,
and I'm interested in the potential applications of type systems
in other domains of computer science, such as distributed systems and
memory management.
    """

aboutContent3 : String
aboutContent3 = processMultiline
    """
My philosophical interests revolve primarily around ontology (the study of \"what is\")
and epistemology (the study of knowledge). I enjoy reading about the philosophies of
science and language, as well as the analytic tradition more broadly. A few of the works
influential in my philosophical development (and which I highly recommend!) include 
Hume's "Treatise of Human Nature", Kuhn's "The Structure of Scientific Revolutions",
Howson's "Hume's Problem", van Fraasen's "The Scientific Image",
Han's "Psychopolitics", and Spinoza's "Ethics".
    """

aboutContent4: String
aboutContent4 = processMultiline
    """
I've twice had the privilege of interning as a software engineer, once at Fidelity in 2023
and most recently at Roblox in 2024. During the semester, I serve as a teaching assistant
for CS112, an introductory computer science class on data structures and
object-oriented programming. For more details on my professional experience,
please refer to my resumé linked above (soon).
    """

aboutContent5 : String
aboutContent5 = processMultiline
    """
In my personal life, I'm big into music— I've been playing guitar for a few years now,
I love going to concerts, and I have a record collection that I am trying desperately to
stall the growth of. Check out my Spotify page (coming later) to learn 
what I've been listening to! Otherwise, in my free time
I enjoy reading (see my reading list, when I finish that page), running, playing Factorio,
and spending time with my two dogs, Otis and Sammie!
    """