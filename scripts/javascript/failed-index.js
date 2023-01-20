    fetch("https://raw.githubusercontent.com/falcosecurity/falco/master/rules/falco_rules.yaml")
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = "<pre>" + data + "</pre>";
      });

    function searchRule() {
      let input = document.getElementById("search").value;
      let rules = document.getElementById("content").innerText;
      let lines = rules.split("\n");
      let filteredRules = [];
      let inRule = false;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(input)) {
          inRule = true;
        }
        if (inRule) {
          filteredRules.push(lines[i]);
        }
        if (lines[i] === "") {
          inRule = false;
        }
      }

      document.getElementById("content").innerHTML = "<pre>" + filteredRules.join("\n") + "</pre>";
    }
