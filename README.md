# Mitre-Attack-Linux-Enterprise
This Github repository was designed to better align the tactics and techniques representing within the MITRE ATT&amp;CK® Matrix for Enterprise's, so that businesses can use open-source Falco to readily comply with the MITRE ATT&amp;CK® framework.

## Drive-By Compromise

###### Detection

| ID | Data Source | Data Component | Detects |
| --- | --- | --- | --- |
| `DS0015` | Application Log | [Application Log Content](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/44d286a613cfc557848871f68d090a41cc91c417/rules/falco_rules.yaml#L4) | Firewalls and proxies can inspect URLs for potentially known-bad domains or parameters. They can also do *reputation-based analytics* on websites and their requested resources such as how old a domain is, who it's registered to, if it's on a known bad list, or how many other users have connected to it before. |
| `DS0022` | File | [File Creation](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/d746791e58d8b344ab3fe91a319c70c85c6b3699/rules/falco_rules.yaml#L14) | Monitor for newly constructed files written to disk to gain access to a system through a user visiting a website over the normal course of browsing. |
| `DS0029` | Network Traffic | [Network Connection Creation](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/e36296abbe1f3011f2359eb45dc13c73b95cf5e7/rules/falco_rules.yaml#L23) | Monitor for newly constructed network connections to untrusted hosts that are used to send or receive data. |
| | | [Network Traffic Content](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/5b72e1a7f0c3523c13ed69b08d55f4bdcb2051df/rules/falco_rules.yaml#L34) | Monitor for other unusual network traffic that may indicate additional tools transferred to the system. Use network intrusion detection systems, sometimes with SSL/TLS inspection, to look for known malicious scripts (recon, heap spray, and browser identification scripts have been frequently reused), common script obfuscation, and exploit code. |
| `DS0009` | Process | [Process Creation](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/3f0df43241c4ab3fd0e0bf4267ddff1028694aad/rules/falco_rules.yaml#L45) | Look for behaviors on the endpoint system that might indicate successful compromise, such as abnormal behaviors of browser processes. This could include suspicious files written to disk, evidence of Process Injection for attempts to hide execution, or evidence of Discovery. |

## Exploit Public-Facing Application

###### Detection

| ID | Data Source | Data Component | Detects |
| --- | --- | --- | --- |
| `DS0015` | Application Log | [Application Log Content](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/44d286a613cfc557848871f68d090a41cc91c417/rules/falco_rules.yaml#L4) | Firewalls and proxies can inspect URLs for potentially known-bad domains or parameters. They can also do *reputation-based analytics* on websites and their requested resources such as how old a domain is, who it's registered to, if it's on a known bad list, or how many other users have connected to it before. |
| `DS0029` | Network Traffic | [Network Connection Creation](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/e36296abbe1f3011f2359eb45dc13c73b95cf5e7/rules/falco_rules.yaml#L23) | Monitor for newly constructed network connections to untrusted hosts that are used to send or receive data. |
| | | [Network Traffic Content](https://github.com/n1g3ld0ugla5/Mitre-Attack-Linux-Enterprise/blob/5b72e1a7f0c3523c13ed69b08d55f4bdcb2051df/rules/falco_rules.yaml#L34) | Monitor for other unusual network traffic that may indicate additional tools transferred to the system. Use network intrusion detection systems, sometimes with SSL/TLS inspection, to look for known malicious scripts (recon, heap spray, and browser identification scripts have been frequently reused), common script obfuscation, and exploit code. |
