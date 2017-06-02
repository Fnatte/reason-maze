
let shuffle d => {
    let nd = List.map (fun c => (Random.bits (), c)) d;
    let sond = List.sort compare nd;
    List.map snd sond;
};

module Float = {
  let (+) t t' => t +. t';
  let (-) t t' => t -. t';
  let (/) t t' => t /. t';
  let ( * ) t t' => t *. t';
};
