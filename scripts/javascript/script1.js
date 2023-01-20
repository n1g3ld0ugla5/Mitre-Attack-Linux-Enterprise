    fetch("https://raw.githubusercontent.com/falcosecurity/falco/master/rules/falco_rules.yaml")
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = "<pre>" + data + "</pre>";
      });
