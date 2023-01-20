    fetch("https://raw.githubusercontent.com/falcosecurity/falco/master/rules/falco_rules.yaml")
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = "<pre>" + data + "</pre>";
      });

    function searchRule() {
      let input = document.getElementById("search").value;
      let rules = document.getElementById("content").innerText;
      let filteredRules = rules.split("\n").filter(rule => rule.includes(input));
      document.getElementById("content").innerHTML = "<pre>" + filteredRules.join("\n") + "</pre>";
    }
