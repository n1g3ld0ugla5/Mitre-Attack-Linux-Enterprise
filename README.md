# Mitre-Attack-Linux-Enterprise
This Github repository was designed to better align the tactics and techniques representing within the MITRE ATT&amp;CK® Matrix for Enterprise's, so that businesses can use open-source Falco to readily comply with the MITRE ATT&amp;CK® framework.

## Drive-By Compromise

###### Detection

| ID | Data Source | Data Component | Detects |
| --- | --- | --- | --- |
| `DS0015` | Application Log | [Application Log Content](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/44d286a613cfc557848871f68d090a41cc91c417/rules/falco_rules.yaml#L4) | Firewalls and proxies can inspect URLs for potentially known-bad domains or parameters. They can also do *reputation-based analytics* on websites and their requested resources such as how old a domain is, who it's registered to, if it's on a known bad list, or how many other users have connected to it before. |
| `DS0022` | File | File Creation | Monitor for newly constructed files written to disk to gain access to a system through a user visiting a website over the normal course of browsing. |
| `DS0029` | Network Traffic | Network Connection Creation | Monitor for newly constructed network connections to untrusted hosts that are used to send or receive data. |
| | | Network Traffic Content | Monitor for other unusual network traffic that may indicate additional tools transferred to the system. Use network intrusion detection systems, sometimes with SSL/TLS inspection, to look for known malicious scripts (recon, heap spray, and browser identification scripts have been frequently reused), common script obfuscation, and exploit code. |
| `DS0009` | Process | Process Creation | Look for behaviors on the endpoint system that might indicate successful compromise, such as abnormal behaviors of browser processes. This could include suspicious files written to disk, evidence of Process Injection for attempts to hide execution, or evidence of Discovery. |
