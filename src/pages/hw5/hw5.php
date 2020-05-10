<?php
// Array with names
$nameArr[] = "Anna";
$nameArr[] = "Brittany";
$nameArr[] = "Cinderella";
$nameArr[] = "Diana";
$nameArr[] = "Eva";
$nameArr[] = "Fiona";
$nameArr[] = "Gunda";
$nameArr[] = "Hege";
$nameArr[] = "Inga";
$nameArr[] = "Johanna";
$nameArr[] = "Kitty";
$nameArr[] = "Linda";
$nameArr[] = "Nina";
$nameArr[] = "Ophelia";
$nameArr[] = "Petunia";
$nameArr[] = "Amanda";
$nameArr[] = "Raquel";
$nameArr[] = "Cindy";
$nameArr[] = "Doris";
$nameArr[] = "Eve";
$nameArr[] = "Evita";
$nameArr[] = "Sunniva";
$nameArr[] = "Tove";
$nameArr[] = "Unni";
$nameArr[] = "Violet";
$nameArr[] = "Liza";
$nameArr[] = "Elizabeth";
$nameArr[] = "Ellen";
$nameArr[] = "Wenche";
$nameArr[] = "Vicky";
$nameArr[] = "Rachel";
$nameArr[] = "Cecil";
$nameArr[] = "Bobby";
$nameArr[] = "Ziggy";
$nameArr[] = "KC";
$nameArr[] = "Jojo";
$nameArr[] = "Iggy";
$nameArr[] = "Josuke";
$nameArr[] = "Giorno";
$nameArr[] = "Futaba";
$nameArr[] = "Rise";
$nameArr[] = "Yukiko";
$nameArr[] = "Dog";
$nameArr[] = "Arsene";
$nameArr[] = "Lumi";
$nameArr[] = "Juli";
$nameArr[] = "Ivie";
$nameArr[] = "Ohad";
$nameArr[] = "Rachie";
$nameArr[] = "Becky";
$nameArr[] = "Pati";
$nameArr[] = "Ray";
$nameArr[] = "Speedwagon";
$nameArr[] = "Suzie";
$nameArr[] = "Minra";
$nameArr[] = "Vance";
$nameArr[] = "Vallon";
$nameArr[] = "Astolfo";
$nameArr[] = "Feris";
$nameArr[] = "Red";
$nameArr[] = "Barnon";
$nameArr[] = "Higgs";
$nameArr[] = "Mona";
$nameArr[] = "Samus";
$nameArr[] = "Shulk";
$nameArr[] = "Mellia";
$nameArr[] = "Rex";
$nameArr[] = "Nia";
$nameArr[] = "Pyra";
$nameArr[] = "Mythra";
$nameArr[] = "Dawn";
$nameArr[] = "Lillie";
$nameArr[] = "Marnie";
$nameArr[] = "Hop";
$nameArr[] = "Kanna";
$nameArr[] = "Tohru";

// get the q parameter from URL
$nameRequest = $_REQUEST["nameRequest"];

$currentNameHint = "";

// lookup all hints from array if $q is different from ""
if ($nameRequest !== "") 
{
  $nameRequest = strtolower($nameRequest);
  $len=strlen($nameRequest);

  foreach($nameArr as $name) 
  {
    if (stristr($nameRequest, substr($name, 0, $len))) 
    {
      if ($currentNameHint === "") 
      {
        $currentNameHint = $name;
      } 
      else 
      {
        $currentNameHint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $currentNameHint === "" ? "no suggestion" : $currentNameHint;
?>