    fetch("https://raw.githubusercontent.com/falcosecurity/falco/master/rules/falco_rules.yaml")
      .then(response => response.text())
      .then(data => {
        var content = document.getElementById("content");
        var pre = document.createElement("pre");
        var text = document.createTextNode(data);
        pre.appendChild(text);
        content.appendChild(pre);

        // filter macros
        var regex = /macro\s*=\s*"([^"]*)"/g;
        var match;
        while (match = regex.exec(data)) {
          var macroName = match[1];
          var macroLink = document.createElement("a");
          macroLink.href = "#" + macroName;
          macroLink.innerHTML = macroName;
          content.innerHTML = content.innerHTML.replace(macroName, macroLink.outerHTML);
        }

        // add anchors for each macro
        var macroRegex = /macro\s*=\s*"([^"]*)"/g;
        var macroMatch;
        while (macroMatch = macroRegex.exec(data)) {
          var macroAnchor = document.createElement("a");
          macroAnchor.id = macroMatch[1];
          macroAnchor.name = macroMatch[1];
          content.appendChild(macroAnchor);
        }
      });
